const router = require("express").Router();

const { getThoughts, 
    getThoughtById, 
    postThought, 
    updateThought, 
    deleteThought, 
    postReaction, 
    deleteReaction
} = require("../../controllers/thought-controller");

// /thoughts/
router.route("/").get(getThoughts).post(postThought);

// /thoughts/:id
router.route("/:thoughtId").get(getThoughtById).put(updateThought).delete(deleteThought);

// /thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(postReaction);

// /thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;