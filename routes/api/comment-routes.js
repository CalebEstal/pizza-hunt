const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');

// Set up Post Route to add comments at /api/comments/<pizzaId>
router
    .route('/:pizzaId')
    .post(addComment);

//Set up Delete route to remove comments at /api/comments/<pizzaId>/<commentId>
router 
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;