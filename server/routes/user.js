const router = require("express").Router();
const UserCtl = require('../controllers/user');

router.param('userId', UserCtl.onPramUserId);
router.get('/', UserCtl.onQueryUser)

// router.post('/:userId/create-post', User.onPostCreate);
router.post('/:userId/', UserCtl.onIdCreate);
router.get('/:userId/', UserCtl.onIdRead);
router.put('/:userId/', UserCtl.onIdUpdate);
router.delete('/:userId/', UserCtl.onIdDelete);


module.exports = router;