
const router = require('express').Router();
const { createPost } = require('../controllers/post');

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

module.exports = router;