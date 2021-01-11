const router = require("express").Router();
const User = require('../controllers/user');

router.param('userId', User.onPramUserId);

router.post('/:userId/create-post', User.onPostCreate);
router.post('/:userId/', User.onIdRead);
router.get('/:userId/', User.onIdRead);
router.put('/:userId/', User.onIdUpdate);
router.delete('/:userId/', User.onIdDelete);


module.exports = router;