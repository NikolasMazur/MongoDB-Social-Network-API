const router = require("express").Router();

const {getUsers, 
    getUserById, 
    postUser, 
    updateUser, 
    deleteUser, 
    postFriend, 
    deleteFriend
} = require("../../controllers/user-controller");

// /users
router.route("/").get(getUsers).post(postUser);

// /users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// /users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(postFriend).delete(deleteFriend);


module.exports = router;