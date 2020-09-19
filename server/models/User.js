const mongoose = require("mongoose");
const _ = require("lodash");
const { Schema } = mongoose;

const mongoSchema = new Schema({
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
    currency: { type: Schema.Types.ObjectId, ref: "Currency", unique: true },
});


class UserClass {
    static publicFields() { return ['provider', 'userId', 'displayName', 'email', 'avatarUrl', 'isAdmin', 'isGithubConnected'] }
    static loginFelds() { return ['userId', 'displayName', 'avatarUrl', 'isAdmin', 'currency'] }

    static async signInOrSignUp({ provider, userId, email, token, displayName, avatarUrl }) {
        const user = await this.findOne({ userId });
        if (user) {
            let modifier = {};
            if (token.accessToken) { modifier.access_token = token.accessToken; }
            if (token.refreshToken) { modifier.refresh_token = token.refreshToken; }
            if (_.isEmpty(modifier)) { return user; }

            await this.updateOne({ userId }, { $set: { token: modifier } });
            return user;
        }

        const userCount = await this.find().countDocuments();
        const newUser = await this.create({
            provider,
            userId,
            email,
            token,
            displayName,
            avatarUrl,
            isAdmin: userCount === 0,
        });
        return _.pick(newUser, UserClass.publicFields());
    }

    static async isUsernameExisted(username) { return await this.findOne({ userId: username }); }
    static async setCurrency({ userId, currencyId }) { return await this.updateOne({ userId }, { $set: { currency: currencyId } }); }

    async changePassword(password) { return await this.updateOne({ password: password }); }
    async updateInfo(data) { return await this.updateOne(data); }
}

mongoSchema.loadClass(UserClass);
const User = mongoose.model("User", mongoSchema);

module.exports = User;

