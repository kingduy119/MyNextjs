const router = require("express").Router();
const {
    onPramUserId, onPramPostId,
    onPostCreate, onPostFindOnce, onPostFindMany, onPostUpdate, onPostDelete,
    onFindUser,
} = require('../controllers/user');

router.param('userId', onPramUserId);

router.post('/:userId/create-post', onPostCreate);
router.get('/:userId', onFindUser);
router.get('/:userId/posts', onPostFindMany);

router.param('postId', onPramPostId);
router.get('/:userId/post/:postId', onPostFindOnce);
router.put('/:userId/post/:postId/update', onPostUpdate);
router.delete('/:userId/post/:postId/delete', onPostDelete);



module.exports = router;