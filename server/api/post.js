const router = require("express").Router();
const { mdwPostCreate } = require("../validators/post");
const { createPost, readPost, updatePost, deletePost, findPosts } = require("../controllers/post");


router.post('/create', mdwPostCreate, createPost);
router.get('/read', readPost);
router.put('/update', updatePost);
router.delete('/delete', deletePost);
router.get('/posts', findPosts);

module.exports = router;