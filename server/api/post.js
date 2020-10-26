const router = require("express").Router();
const { verifyToken } = require('../controllers/auth');
const { validateCreatePost } = require("../validators/post");
const { createPost, readPost, updatePost, deletePost, findPosts } = require("../controllers/post");


router.post('/create', verifyToken, validateCreatePost, createPost);
router.get('/read', verifyToken, readPost);
router.put('/update', verifyToken, updatePost);
router.delete('/delete', verifyToken, deletePost);
router.get('/posts', verifyToken, findPosts);

module.exports = router;