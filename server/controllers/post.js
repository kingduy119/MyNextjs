const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Notification = require("../models/Notification");

/**
 * CRUD: Post content
 */
exports.onCreate = async (req, res) => {
    try {
        let { by, content } = req.body;
        
        let post = await Post.create({ by, content });
        let user = await User
            .findByIdAndUpdatePosts(post)
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
            // .limit(10);

        
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
            console.log(`POST ${JSON.stringify(post)}`);
            next();
        });
}

exports.onPostIdCreate = async (req, res) => {
    let { action } = req.body
    action = action.toUpperCase();
    try {
        if (action === 'COMMENT') {
            let { by, content } = req.body;
            let comment = await Comment.create({
                by, content,
            });
            let post = await Post
                .createComment(req.post, comment)
                .pplComments();

            // if (post) post.onNotification(req.body);
            if (post.by !== req.body.by) {
                post.onNotification({...req.body, comment});
            }

            return res.json({ comments: post.comments });
        }
        else {
            // throw { message: `Update's Post haven't support this action!` };
            throw new Error("Post create action error!");
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
    action = action.toUpperCase();
    try {
        if (action == 'FEEL') {
            let idxFls = req.post.feelings.findIndex(fls => fls.by == req.body.by);
            let post = await Post
                .onFeelings(req.post, { ...req.body, idxFls })
                .pplFeelings();
            if (post && idxFls == -1) post.onNotification(req.body);

            return res.json({ feelings: post.feelings.filter(fls => 
                fls.kind !== 'none'    
            ) });
        }
        else if (action === 'COMMENT-FEEL') {
            let { commentId, by, feel } = req.body;
            let comment = req.post.comments.find(cmt => 
                cmt._id.toString() === commentId
            );
            
            comment = await Comment
                .onIdUpdateFeelings(comment, {by, feel})
                .pplFeelings();

            return res.json({ feelings: comment.feelings});
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

