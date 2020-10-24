const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    provider: { type: String, require: true, default: "local" },
    userId: {
        type: String,
        require: true,
        unique: [true, 'Username is exited']
    },
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
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});


const User = mongoose.model("User", userSchema);
module.exports = User;

