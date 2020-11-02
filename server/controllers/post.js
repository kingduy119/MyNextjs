const User = require("../models/User");
const Post = require("../models/Post");

// [GET]post/posts
exports.findPosts = async (req, res) => {
    try {
        let posts = await Post
            .find()
            .select('createAt postBy content')
            .populate('postBy', 'avatarUrl displayName')
            .exec();
        // .limit(30);

        return res.json({ posts });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}

/**
 * [pram]post/:postId
 */
exports.onParamPostId = (req, res, next, id) => {
    console.log("Called API: onParamPostId");
    Post.findById(id, (err, post) => {
        if (err) return res.status(404).send('PostId not found');
        req.post = post;
        next();
    });
}
// [GET]post/:postId
exports.onFindPostId = (req, res) => { return res.json(req.post); }

// [POST]post/crete
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

// [PUT]post/:postId/edit
exports.onPostEdit = (req, res) => {
    Post.findByIdAndUpdate(
        { _id: req.post._id },
        { $set: req.post },
        (err, doc) => {
            if (err) return res.status(500).send('ERROR');
            return res.json(doc);
        }
    );
}

// [DELETE]post/:postId/delete
exports.onPostDelete = (req, res) => {
    Post.findByIdAndRemove(
        { _id: req.post._id },
        (err, doc) => {
            if (err) return res.status(500).send('ERROR');
            return res.json(doc);
        }
    );
}



