
const router = require('express').Router();
const { createPost, deletePost, updatePost, getPost, getFeaturedPosts, getPosts, searchPost, getRelatedPosts, uploadImage } = require('../controllers/post');

const multer = require('../middlewares/multer');
const { validate, postValidator } = require('../middlewares/postValidator');
const { parseData } = require('../middlewares')

// Create Post
router.post(
    '/create',
    multer.single("thumbnail"),
    parseData,
    postValidator,
    validate,
    createPost
);

// Update Post
router.put(
    '/:postId',
    multer.single("thumbnail"),
    parseData,
    postValidator,
    validate,
    updatePost
);

// Delete Post
router.delete('/:postId', deletePost)

// Get Post
router.get('/single/:slug', getPost)

// Get featured Posts
router.get('/featured-posts ', getFeaturedPosts)

// Get latest Posts
router.get('/posts', getPosts)

// Get latest Posts
router.get('/search', searchPost)

// Get related Posts
router.get('/related-posts/:postId', getRelatedPosts)

// Upload image
router.post('/upload-image', multer.single("image"), uploadImage);

module.exports = router;