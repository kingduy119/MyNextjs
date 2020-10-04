const router = require("express").Router();
const { createPost, readPost, updatePost, deletePost, posts } = require("../controllers/post");
const { createPostValidator } = require("../validators/post");
const { runValidator } = require("../validators");


router.post('/create', createPostValidator, runValidator, createPost);
router.get('/read', readPost);
router.put('/update', updatePost);
router.delete('/delete', deletePost);

router.get('/posts', posts);

module.exports = router;