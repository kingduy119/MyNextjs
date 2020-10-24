const User = require("../models/User");
const Currency = require("../models/Currency");
const { hash, compare } = require("../utils/verify");
const { SUCCESS, ERROR, USERNAME_EXISTED, USERNAME_NOT_EXITED, WRONG_PASSWORD, SAME_PASSWORD, DELETED } = require("../utils/constant").UserState;

class ProfileManager {
    static async listUser() {
        let users = await User.find();
        if (!users) return { error: ERROR };
        return { state: SUCCESS, data: users };
    }

    static async onLoginOrRegister(data) {
        let user = await User.findOne({ userId: data.userId });
        if (!user)
            user = await User.create(data);

        if (user.token.access_token !== data.token.access_token)
            user.updateOne({ token: data.token });

        return user;
    }

    // DELETE
    static async onHandleRequest(method, info) {
        try {
            let user = await User.findOne({ userId: info.username });
            if (!user && method !== "create") { throw USERNAME_NOT_EXITED; }
            else if (user && method === "create") { throw USERNAME_EXISTED; }

            if (method !== "create" && method !== "find-user") {
                let validate = await compare(info.password, user.password);
                if (!validate) { throw WRONG_PASSWORD; }
            }

            switch (method) {
                case "create": {
                    let cur = new Currency();
                    let hashPwd = await hash(info.password);

                    user = await User.create({
                        userId: info.username,
                        password: hashPwd,
                        displayName: info.displayName,
                        avatarUrl: info.avatarUrl,
                        email: info.email,
                        currency: cur.id,
                    });
                    cur.bindUser(user.id);

                    return { state: SUCCESS, data: user };
                }
                case "find-user":
                    return { state: SUCCESS, data: user };
                case "login": {
                    if (!user.currency) {
                        let currency = await Currency.create({ user: user.id });
                        await user.updateOne({ currency: currency.id });
                    }
                    return { state: SUCCESS, data: user };
                }
                case "change-password": {
                    if (info.newPassword === info.password) throw SAME_PASSWORD;

                    let hashPassword = await hash(info.newPassword);
                    // await user.changePassword(hashPassword);
                    return { state: SUCCESS, data: user };
                }
                case "update": {
                    // await user.updateInfo({ displayName: displayName });
                    return { state: SUCCESS };
                }
                case "delete": {
                    await user.remove();
                    return { state: DELETED };
                }
                default:
                    throw ERROR;
            }
        } catch (err) { return { error: err }; }
    }
}

module.exports = ProfileManager;
