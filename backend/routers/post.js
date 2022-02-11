
const router = require('express').Router();
const { createPost, deletePost, updatePost } = require('../controllers/post');

const multer = require('../middlewares/multer');
const { validate, postValidator } = require('../middlewares/postValidator');
const { parseData } = require('../middlewares')

router.post(
    '/create',
    multer.single("thumbnail"),
    parseData,
    postValidator,
    validate,
    createPost
);

router.put(
    '/:postId',
    multer.single("thumbnail"),
    parseData,
    postValidator,
    validate,
    updatePost
);

router.delete('/:postId', deletePost)

module.exports = router;