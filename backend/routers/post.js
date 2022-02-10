
const router = require('express').Router();
const { createPost, deletePost } = require('../controllers/post');

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

router.delete('/:postId', deletePost)

module.exports = router;