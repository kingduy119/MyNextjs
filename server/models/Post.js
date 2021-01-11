const mongoose = require("mongoose");
const User = require("./User");
const Notification = require("./Notification");

const schema = new mongoose.Schema({
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    by: { ref: "User", type: mongoose.Types.ObjectId, required: true },
    content: {
        type: String,
        min: 1,
    },
    feelings: [{
        by: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        kind: {
            type: String,
            enum: ['none', 'like', 'heart', 'smile'],
        }
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
});

// :: QUERY
schema.query.pplBy = function () {
    return this.populate('by', 'avatarUrl displayName');
}
schema.query.pplFeelings = function () {
    return this.populate({
        path: 'feelings',
        populate: { path: 'by', select: User.fieldPublic() }
    });
}
schema.query.pplComments = function () {
    return this.populate({
        path: 'comments',
        populate: {
            path: 'by feelings.by',
            model: 'User',
            select: User.fieldPublic(),
        }
    });
}


class Post {
    // :: METHODS ::
    onNotification(body) {
        Notification.create({
            action: body.action,
            by: body.by,
            post: this._id,
            comment: body.comment._id,
        })
        .exec((err, notif) => {
            if(err) return {error: err};
            User.findOneAndUpdate({_id: this.by}, 
                {$push: { notifications: notif._id } } );
        })
        return this;
    }

    // :: STATICS ::
    static onFeelings(post, data) {
        let { idxFls, by, feel } = data;

        let query = { _id: post._id }, update;
        if (idxFls == -1) {
            update = { $push: { feelings: { by, kind: feel } } };
        } else {
            let newFeel = post.feelings[idxFls].kind !== feel ? feel : 'none';
            query = { ...query, 'feelings.by': by };
            update = { $set: { 'feelings.$.kind': newFeel } };
        }
        return this.findOneAndUpdate(query, update, { new: true });
    }
    // comments
    static createComment(post, comment) {
        let query = { _id: post._id };
        let update = { $push: { comments: comment._id } };
        return this.findOneAndUpdate(query, update, { new: true });
    }
    // comments.feelings
    static updateFeelingsComment(post, { commentId, userId, feel }) {
        let query, update;

        let idxCMT = post.comments.findIndex(cmt => cmt._id == commentId);
        if (idxCMT === -1) throw null;

        let feelings = post.comments[idxCMT].feelings;
        let idxFLS = feelings.findIndex(feel => feel.by == userId);

        if (idxFLS === -1) {
            query = { _id: post._id, 'comments._id': commentId };
            update = { $push: { 'comments.$.feelings': { by: userId, kind: feel } } };
        } else {
            let newFeel = (feelings[idxFLS].kind != feel) ? feel : 'none';
            feelings[idxFLS].kind = newFeel;

            query = { _id: post._id, 'comments._id': commentId };
            update = { $set: { 'comments.$.feelings': feelings } };
        }

        return this.findOneAndUpdate(query, update, { new: true });
    }

}
schema.loadClass(Post);

module.exports = mongoose.model("Post", schema);
