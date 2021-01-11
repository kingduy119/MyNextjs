const mongoose = require("mongoose");
const User = require("./User");
const Notification = require("./Notification");

const schema = new mongoose.Schema({
    createAt: {
        type: Date,
        default: Date.now
    },
    by: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    content: {
        type: String,
        min: 1,
        max: 100,
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
})

schema.query.pplBy = function () {
    return this.populate('by', 'avatarUrl displayName');
}
schema.query.pplFeelings = function () {
    return this.populate({
        path: "feelings",
        model: "User",
        populate: {path: "by", select: "avatarUrl displayName"},
    });
}


class Comment {
    // :: METHODS ::
    async onNotification(post, body) {
        let notif = await Notification.onPost(post, body);
        await User.onNotification({ _id: this.by._id }, notif);
    }

    // :: STATICS ::
    static onIdUpdateFeelings(comment, data) {
        let { by, feel } = data;
        let update, query = { _id: comment._id };

        let index = comment.feelings.findIndex(fls =>
            fls.by.toString() === by
        );
        if (index === -1) {
            update = { $push: { feelings: { by, kind: feel } } }
        }
        else {
            let newFeel = comment.feelings[index].kind != feel ? feel : 'none';
            query = { ...query, 'feelings.by': by };
            update = { $set: { 'feelings.$.kind': newFeel } };
        }
        return this.findOneAndUpdate(query, update, { new: true });
    }
}

schema.loadClass(Comment)
module.exports = mongoose.model('Comment', schema);