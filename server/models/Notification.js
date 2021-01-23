const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    createAt: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: String,
        enum: ['new', 'seen', 'checked'],
        default: 'new',
        required: true,
    },
    action: {
        type: String,
    },
    by: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post',
    },
    comment: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    },
})

class Notification {
    static onPost(post, doc) {
        let data = {};
        let { action, by } = doc;
        if (doc.action === 'FEEL') {
            data = { post: post._id, action, by };
        }
        else if (doc.action === 'COMMENT') {
            data = { post: post._id, action, by };
        }
        else if (doc.action === 'COMMENT_FEEL') {
            data = { post: post._id, comment: doc.commentId, action, by };
        }
        return this.create(data);
    }
};

schema.loadClass(Notification);
module.exports = mongoose.model("Notification", schema);
