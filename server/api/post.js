const router = require("express").Router();
const { mdwPostCreate } = require("../validators/post");
const Post = require("../controllers/post");

router.post('/',
    // mdwPostCreate,
    Post.onCreate
);
router.get('/posts', Post.onFindMany);

const postId = '/:postId/';
router.param('postId', Post.onPostId);
router.post(postId, Post.onPostIdCreate);
router.get(postId, Post.onPostIdRead);
router.put(postId, Post.onPostIdUpdate);
router.delete(postId, Post.onPostIdDelete);


module.exports = router;