
const router = require('express').Router();
const { createPost } = require('../controllers/post');

const multer = require('../middlewares/multer');
const { validate, postValidator } = require('../middlewares/postValidator');

router.post(
    '/create',
    multer.single("thumbnail"),
    (req, res, next) => {
        const { tags } = req.body;
        if (tags) req.body.tags = JSON.parse(tags)
        console.log(req.body.tags);
        next();
        
        
    },
    postValidator,
    validate,
    createPost
);

module.exports = router;