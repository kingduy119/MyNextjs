const User = require("../models/User");
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        let post = await Post.create({ content: req.body.content, postBy: req.user._id });
        let user = await User.findByIdAndUpdate(
            { _id: req.user._id },
            { $push: { posts: post._id } }
        ).select('displayName avatarUrl');

        let docs = Object.assign(post, { postBy: user });
        return res.json({ post: docs })
    } catch (err) {
        return res.status(400).json({
            error: "Failed to create post!"
        });
    }
}

exports.readPost = (req, res) => {
    res.json({
        message: "readPost connect successfully!",
        query: req.query,
        body: req.body,
    });
}

exports.updatePost = (req, res) => {
    res.json({
        message: "update connect successfully!",
        query: req.query,
        body: req.body,
    });
}

exports.deletePost = (req, res) => {
    Post.findByIdAndRemove({ _id: req.body.id }, (err, item) => {
        if (err) return res.status(404).json({ error: err });
        return res.json({ post: item });
    })
}

exports.findPosts = async (req, res) => {
    try {
        let data = await Post
            .find()
            .select('createAt postBy content')
            .populate('postBy', 'avatarUrl displayName')
            .limit(10);

        return res.json({ posts: data });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}

// function showlogRequest(path, req) {
//     console.log(`
//     ${path}
//         query: ${JSON.stringify(req.query)} /n
//         body: ${JSON.stringify(req.body)} /n
//         cookie: ${JSON.stringify(req.cookie)} /n
//         user: ${JSON.stringify(req.user)} /n
//         token: ${JSON.stringify(req.header["token"])} /n
//     `);
// }

