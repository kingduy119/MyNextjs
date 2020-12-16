const User = require("../models/User");
const Post = require("../models/Post");

/**
 * CRUD: Post content
 */
// POST paranms {userId, content} return  => {post}
exports.onCreate = async (req, res) => {
    console.log(`BODY: ${req.body}`);
    try {
        let post = await Post.create({
            postBy: req.body.userId,
            content: req.body.content,
        });
        let user = await User.findByIdAndUpdate(
            { _id: req.user._id },
            { $push: { posts: post._id } }
        ).select('displayName avatarUrl');

        let docs = Object.assign(post, { postBy: user });
        return res.json({ post: docs })
    } catch (err) {
        return res.status(500).send(err);
    }
}

/** GET
 * params() return => [posts]
 */
exports.onFindMany = async (req, res) => {
    try {
        let posts = await Post
            .find()
            .select('createAt postBy content likes comments')
            .populate('postBy', 'avatarUrl displayName')
            .populate({
                path: 'comments',
                populate: {
                    path: 'postBy',
                    select: 'avatarUrl displayName'
                }
            })
            .exec();

        return res.json({ posts });
    } catch (err) {
        return res.status(500).send(err);
    }
}

// GET path /:postId/ return post:{JSON}
exports.onPostId = (req, res, next, id) => {
    Post.findById(id)
        .populate('postBy', 'avatarUrl displayName')
        .exec((err, post) => {
            if (err) return res.status(404).send(null);
            req.post = post;
            next();
        });
}
exports.onPostRead = (req, res) => {
    return res.json(req.post);
}

/** PUT
 * like || unlike || comment-like || comment-unlike:
 * params{userId, liked} return [likes]
 * 
 * comment: params{userId, content} return [comments]
 */
exports.onPostUpdate = async (req, res) => {
    let post = req.post;
    let { action } = req.body;

    // return res.send(`${action}`); // DEV
    try {
        if (action === 'like' || action === 'unlike') {
            let field = { likes: req.body.userId };
            let update = action == 'like' ?
                { $push: field } : { $pull: field };

            let data = await Post
                .findByIdAndUpdate({ _id: post._id }, update, { new: true })
                .populate('likes', 'avatarUrl displayName');

            return res.json({ likes: data.likes });
        }
        else if (action === 'comment') {
            let { userId, content } = req.body;
            let comment = { postBy: userId, content };
            let update = { $push: { comments: comment } };
            let data = await Post
                .findByIdAndUpdate({ _id: req.post._id }, update, { new: true })
                .populate({
                    path: 'comments',
                    populate: { path: 'postBy', select: 'displayName avatarUrl' }
                });;

            return res.json({ comments: data.comments });
        }
        else if (action === 'comment-like' || action === 'comment-unlike') {
            let { commentId, userId } = req.body;
            let data = await Post.findById(req.post._id).select('comments');
            data.comments.map(comment => {
                if (action === 'comment-like'
                    &&
                    !comment.likes.includes(userId)) {
                    comment.likes.push(userId);
                }
                else if (action === 'comment-unlike'
                    &&
                    comment.likes.length > 0) {
                    let index = comment.likes.indexOf(userId);
                    comment.likes.splice(index, 1);
                }
            })
            await data.save();
            let comment = data.comments.find(doc => doc._id == commentId);
            return res.json({ likes: comment.likes });
        }
        else { throw null; }
    } catch (err) { return res.status(500).send(err); }
}

exports.onPostDelete = (req, res) => { // DELETE One
    Post.findByIdAndRemove(
        { _id: req.post._id },
        (err, doc) => {
            if (err) return res.status(500).send('ERROR');
            return res.json(doc);
        }
    );
}

/**
 * CRUD: POST COMMENTS
 */
exports.onPostCommentCreate = async (req, res) => { // POST
    let { userId, content } = req.body;
    let comment = { postBy: userId, content };
    let update = { $push: { comments: comment } };
    try {
        let doc = await Post.findByIdAndUpdate({ _id: req.post._id }, update);
        return res.json({ comments: doc.comments });
    } catch (err) {
        return res.status(500).send(null);
    }
}

exports.onPostCommentRead = async (req, res) => { // GET
    try {
        let doc = await Post.findById(req.post._id)
            .select('comments')
            .populate({ path: 'comments', populate: { path: 'likes', select: 'displayName avatarUrl' } })
            .populate({ path: 'comments', populate: { path: 'postBy', select: 'displayName avatarUrl' } });
        return res.json(doc);
    } catch (err) {
        return res.status(500).send(null);
    }
}

exports.onPostCommentUpdate = async (req, res) => { // PUT
    let { action } = req.body;
    try {
        let doc = null;
        if (action === 'like') {
            let post = await Post.findById(req.post._id).select('comments')
            if (post && post.comments) {
                post.comments[0].likes.push(req.body.by);
                doc = await post.save();
            }
        }
        return res.send(doc);
    } catch (err) {
        return res.status(500).send(null);
    }
}

// func(action, data{})
exports.onPostCommentDelete = async (req, res) => { // DELETE
    let { index, _id } = req.body;
    try {
        let post = await Post.findById(req.post._id).select('comments');
        if (post && post.comments[index]) {
            post.comments.splice(index, 1);
        }
        let { comments } = await post.save();
        res.json({ comments });
    } catch (err) {
        return res.status(500).send(null);
    }
}

