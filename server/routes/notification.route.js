const router = require("express").Router();
const Notification = require("../controllers/notification");

const id = '/:id/';

router.post(
    id,
    Notification.onCreate
);
router.get(
    id,
    Notification.onRead
);
router.put(
    id,
    Notification.onUpdate
);
router.delete(
    id,
    Notification.onDelete
);

module.exports = router;