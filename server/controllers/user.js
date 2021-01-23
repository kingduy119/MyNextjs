const User = require("../models/User");
const Post = require("../models/Post");
const Notification = require("../models/Notification");
const STT_ERROR = 500;
// /:userId
exports.onPramUserId = async (req, res, next, id) => {
    User.findById(id, (err, user) => {
        if (err) return res.status(404);
        req.user = user;
        next();
    })
}

// /:postId
exports.onPramPostId = (req, res, next, id) => {
    console.log('onPramPostId');
    Post.findById(id, (err, post) => {
        if (err) return res.status(404).send('Not found');
        req.post = post;
        next();
    })
}

// CRUD :: userId ::
exports.onIdCreate = (req, res) => {
    return res.send("userId Create");
}
exports.onIdRead = (req, res) => {
    User.findById(req.user._id)
        .pplPosts()
        .pplNotifications()
        .exec(async (err, user) => {
            if (err) return res.status(404);

            return res.json(user);
        })
}
exports.onIdUpdate = async (req, res) => {
    let { action } = req.body;
    try {
        if (action === 'NOTIFICATIONS') {
            let notif = await Notification.findOneAndUpdate(
                { _id: req.body.notifId },
                { $set: { state: req.body.state } },
                { new: true }
            );
            return res.json({ notification: notif });
        }
        else { throw 'Action"s not support!'; }
    } catch (err) { return res.status(500).send(err); }
}
exports.onIdDelete = (req, res) => {
    return res.send("userId Delete");
}


/**
 * [POST]/create-post => response{post}
 */
exports.onPostCreate = async (req, res) => {
    try {
        let { content } = req.body;
        let data = { content, postBy: req.user._id };
        let post = await Post.create(data);
        let user = await User.findByIdAndUpdate(
            { _id: req.user._id },
            { $push: { posts: post._id } }
        ).select('displayName avatarUrl');

        Object.assign(post, { postBy: user })
        return res.json({ post });
    } catch (err) { return res.status(500).send(err); }
}

/**
 * [GET]/:userId/post/:postId/
 */
exports.onPostFindOnce = async (req, res) => {
    let now = new Date().getTime();
    let postTime = req.post.createAt.getTime();
    let time = now > postTime;
    console.log(`getTime: ${time}`);
    return res.json({ post: req.post, time });
}

/**
 * [GET]/:userId/wall-post 
 * return list Post docs that User have created
 */
exports.onPostFindMany = async (req, res) => {
    let { userId } = req.params;
    try {
        let data = await User
            .findById(userId)
            .select('posts')
            .populate('posts', 'createAt content');
        console.log(`onPostFindMany: ${JSON.stringify(data.posts.reverse())}`)
        res.json(data.posts);
    } catch (err) {
        res.status(STT_ERROR).json({ error: err });
    }
}

// [PUT]/:userId/post/:postId/update
exports.onPostUpdate = async (req, res) => {
    try {
        let { content } = req.body;
        let doc = await Post.findByIdAndUpdate(
            { _id: req.post._id },
            { $set: { content: content } },
            { new: true }
        );
        res.json(doc);
    } catch (err) { res.status(404).send(err); }
}

// [DELETE]/:userId/post/:postId/delete
exports.onPostDelete = async (req, res) => {
    try {
        let post = await Post.findByIdAndRemove({ _id: req.post._id });
        await User.findByIdAndUpdate(
            { _id: req.user._id },
            { $pop: { posts: post._id } }
        );
        res.send(`SUCCESS`);
    } catch (err) { res.status(404).send(err); }
}