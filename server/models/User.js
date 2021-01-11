const mongoose = require("mongoose");
const { Schema } = mongoose;


const schema = new Schema({
    provider: { type: String, require: true, default: "local" },
    userId: { type: String, required: true, unique: [true, 'Username is exited'] },
    password: { type: String, require: true },
    createAt: { type: Date, require: true, default: new Date().toISOString(), },
    email: { type: String, require: true, },
    isAdmin: { type: Boolean, default: false, },
    isGithubConnected: { type: Boolean, default: false, },
    githubAccessToken: { type: String, },
    displayName: { type: String, default: "New Member" },
    avatarUrl: String,
    token: {
        access_token: String,
        refresh_token: String,
        token_type: String,
        expiry_date: Number,
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    notifications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Notification'
    }]
});

// :: QUERY ::
schema.query.pplPosts = function () {
    return this.populate({
        path: 'posts',
        model: 'Post',
        populate: {
            path: 'feelings.by', select: User.fieldPublic(),
        }
    });
}
schema.query.pplNotifications = function () {
    return this.populate({
        path: 'notifications',
        model: 'Notification',
        populate: { path: 'by', select: User.fieldPublic(), },
    });
}

class User {
    // :: INSTANCE ::
    // :: STATIC ::
    static fieldPublic() { return 'avatarUrl displayName'; }
    static onNotification(user, notif) {
        return this.findByIdAndUpdate(
            { _id: user._id },
            { $push: { notifications: notif._id } }
        );
    }

    /**
     * @param {field} doc 
     * {field: posts, post}
     */
    static findByIdAndUpdatePosts(post) {
        let query = { _id: post.by };
        let update = { $push: { posts: post._id } };
        return this.findOneAndUpdate(query, update, { new: true });
    }

    

}

schema.loadClass(User);
module.exports = mongoose.model("User", schema);

