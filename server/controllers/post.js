const User = require("../models/User");
const Post = require("../models/Post");

// [GET]post/posts
exports.findPosts = async (req, res) => {
    try {
        let posts = await Post
            .find()
            .select('createAt postBy content likes')
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

// [POST]post/crete(userId, content)
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
    let post = req.body.post;
    let query = {};
    if (post.action === "like") { query = { $push: { likes: 'id' } }; }

    Post.findByIdAndUpdate(
        { _id: post._id },
        query,
        (err, doc) => {
            if (err) return res.status(500).send('ERROR');
            return res.json(doc);
        }
    );
}

// [PUT]/:postId/like
exports.onPostLike = (req, res) => {
    let { postId } = req.params;
    let { user, action } = req.body;

    let isLike = (action === 'like');
    let field = { likes: user._id };
    let update = isLike ? { $push: field } : { $pull: field }

    Post
        .findByIdAndUpdate({ _id: postId }, update, /**option, callback, */)
        // .populate('likes', 'avatarUrl displayName')
        .exec((err, doc) => {
            if (err) { return res.status(500).send(null); };

            if (isLike) {
                doc.likes.push(user._id);
            } else {
                let index = doc.likes.indexOf(item => item === user._id);
                doc.likes.splice(index, 1);
            }
            res.json({ likes: doc.likes });
        });
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



