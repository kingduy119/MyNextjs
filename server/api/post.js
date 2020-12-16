const router = require("express").Router();
const { mdwPostCreate } = require("../validators/post");
const Post = require("../controllers/post");

const postId = '/:postId/';
router.post('/create', mdwPostCreate, Post.onCreate);
router.get('/posts', Post.onFindMany);

// POST
router.param('postId', Post.onPostId);
router.get(postId, Post.onPostRead);
router.put(postId, Post.onPostUpdate);
router.delete(postId, Post.onPostDelete);

// Comment
router.post(`${postId}comment`, Post.onPostCommentCreate);
router.get(`${postId}comment`, Post.onPostCommentRead);
router.put(`${postId}comment`, Post.onPostCommentUpdate);
router.delete(`${postId}comment`, Post.onPostCommentDelete);

module.exports = router;