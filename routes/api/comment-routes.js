const router = require('express').Router();

const { addComment, 
        removeComment,
        addReply,
        removeReply
 } = require('../../controllers/comment-controller');

// Set up Post Route to add comments at /api/comments/<pizzaId>
router
    .route('/:pizzaId')
    .post(addComment);

//Set up Delete route to remove comments at /api/comments/<pizzaId>/<commentId>
router 
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

//Set up delete route to remove replies
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply)

module.exports = router;