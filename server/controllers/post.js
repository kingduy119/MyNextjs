const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
// const Notification = require("../models/Notification");

/**
 * CRUD: Post content
 */
exports.onCreate = async (req, res) => {
    try {
        let { by, content } = req.body;
        let post = await Post.create({ by, content });
        let user = await User
            .onUpdateField({ field: 'posts', post })
            .select(User.fieldPublic());
        if (user) { post.by = user; }

        return res.json({ post });
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
            .pplBy()
            .pplFeelings()
            .pplComments()
            .limit(10);
        return res.json({ posts });
    } catch (err) {
        return res.status(500).send(err);
    }
}

// :: :postId ::
exports.onPostId = (req, res, next, id) => {
    Post.findById(id)
        .populate('comments')
        .exec((err, post) => {
            if (err) return res.status(404).send(null);
            req.post = post;
            next();
        });
}

exports.onPostIdCreate = async (req, res) => {
    let { action } = req.body
    try {
        if (action === 'COMMENT') {
            let comment = await Comment.create({
                by: req.body.by,
                content: req.body.content,
            });
            let post = await Post
                .onComment({ post: req.post, comment })
                .pplComments();

            if (post) post.onNotification(req.body);
            return res.json({ comments: post.comments });
        }
        else {
            throw { message: `Update's Post haven't support this action!` };
        }
    } catch (err) { return res.status(500).send(err); }
}

exports.onPostIdRead = (req, res) => {
    Post
        .findById(req.post._id)
        .pplBy()
        .pplFeelings()
        .pplComments()
        .exec((err, doc) => {
            if (err) return res.status(500);
            return res.json({ post: doc });
        });
}

exports.onPostIdUpdate = async (req, res) => {
    let { action } = req.body;
    try {
        if (action == 'FEEL') {
            let idxFls = req.post.feelings.findIndex(fls => fls.by == req.body.by);
            let post = await Post
                .onFeelings(req.post, { ...req.body, idxFls })
                .pplFeelings();
            if (post && idxFls == -1) post.onNotification(req.body);

            return res.json({ feelings: post.feelings });
        }
        else if (action === 'COMMENT_FEEL') {
            let post = await Post.findById(req.post._id).populate('comments');
            let idxCmt = post.comments
                .findIndex(cmt => cmt._id == req.body.commentId);

            if (idxCmt == -1) throw null;

            let idxFls = post.comments[idxCmt].feelings
                .findIndex(fls => fls.by == req.body.by);
            let comment = await Comment
                .onFeelings(post.comments[idxCmt].feelings, { ...req.body, idxFls });

            if (comment && idxFls == -1) { comment.onNotification(req.post, req.body); }

            return res.json({ feelings: comment.feelings });
        }
        else { throw { message: `Update's Post haven't support this action!` }; }
    } catch (err) { return res.status(500).send(err); }
}

exports.onPostIdDelete = (req, res) => { // DELETE One
    Post.findByIdAndRemove(
        { _id: req.post._id },
        (err, doc) => {
            if (err) return res.status(500).send('ERROR');
            return res.json(doc);
        }
    );
}

