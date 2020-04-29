const mongoose = require("mongoose");
// const _ = require("lodash");
// const generateSlug = 
// const sendEmail = require("../aws");

const { Schemna } = mongoose;

const mongoSchema = new Schemna({
    googleId: {
        type: String,
        require: true,
        unique: true,
    },
    googleToken: {
        access_token: String,
        refresh_token: String,
        token_type: String,
        expiry_date: Number,
    },
    createAt: {
        type: Date,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    displayName: String,
    avatarUrl: String,
    isGithubConnected: {
        type: Boolean,
        default: false,
    },
    githubAccessToken: {
        type: String,
    },
});

class UserClass {
    static publicFields() {
        return [
            'id',
            'displayName',
            'email',
            'avatarUrl',
            'isAdmin',
            'isGithubConnected',
        ];
    }
}

mongoSchema.loadClass(UserClass);

const User = mongoose.model("User", mongoSchema);
module.exports = User;

