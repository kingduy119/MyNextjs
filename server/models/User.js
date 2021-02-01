const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    provider: { type: String, require: true, default: "local" },
    userId: { type: String, required: true, unique: true },
    password: { type: String, require: true },
    displayName: { type: String, default: "New Member" },
    email: { type: String, require: true, },
    isAdmin: { type: Boolean, default: false, },
    createAt: { type: Date, require: true, default: Date.now() },
    avatarUrl: String,
    access_token: {type: String, default: ''},
    refresh_token: {type: String, default: ''},
    isGithubConnected: { type: Boolean, default: false, },
    githubAccessToken: { type: String, },

    // Feautures:
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    notifications: {
        type: mongoose.Types.ObjectId,
        ref: 'Notification'
    }
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
    async updateToken(accessToken, refreshToken) {
        this.access_token = accessToken;
        this.refresh_token = refreshToken;
        await this.save();
    }

    // :: STATIC ::
    static fieldPublic() { return 'avatarUrl displayName'; }
    static onNotification(user, notif) {
        return this.findByIdAndUpdate(
            { _id: user._id },
            { $push: { notifications: notif._id } }
        );
    }

    static findByIdAndUpdatePosts(post) {
        let query = { _id: post.by };
        let update = { $push: { posts: post._id } };
        return this.findOneAndUpdate(query, update);
    }

}

schema.loadClass(User);
module.exports = mongoose.model("User", schema);

