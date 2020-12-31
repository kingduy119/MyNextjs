const router = require("express").Router();
const User = require('../controllers/user');

router.param('userId', User.onPramUserId);

// router.post('/:userId/create-post', User.onPostCreate);
router.post('/:userId/', User.onUserIdRead);
router.get('/:userId/', User.onIdRead);
router.put('/:userId/', User.onUserIdRead);
router.delete('/:userId/', User.onUserIdRead);


module.exports = router;