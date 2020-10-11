const mongoose = require("mongoose");
const { Schema } = mongoose;

const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync(10);

const userSchema = new Schema({
    provider: { type: String, require: true, default: "local" },
    userId: { type: String, require: true, unique: true, },
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

// userSchema.virtual('public_types')
//     .get(() => { return 'userId displayName avatarUrl'; });

const User = mongoose.model("User", userSchema);
module.exports = User;

