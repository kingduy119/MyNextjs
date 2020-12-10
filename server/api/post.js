const router = require("express").Router();
const { mdwPostCreate } = require("../validators/post");
const {
    onParamPostId, onFindPostId, onPostEdit, onPostDelete,
    createPost, findPosts,
    onPostLike,
} = require("../controllers/post");

router.post('/create', mdwPostCreate, createPost);
router.get('/posts', findPosts);

router.put('/:postId/like', onPostLike);
// router.param('postId', onParamPostId);
router.get('/:postId/', onFindPostId);
router.put('/:postId/edit', onPostEdit);
router.delete('/:postId/delete', onPostDelete);

module.exports = router;