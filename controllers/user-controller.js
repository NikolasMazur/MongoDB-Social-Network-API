const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Please enter valid ID.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  postUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
 deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.userId })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'Please enter valid ID.' })
        : friend.deleteMany({ _id: { $in: user.thoughts } })
    )
    .then(() => res.json({ message: 'User and thoughts removed.' }))
    .catch((err) => res.status(500).json(err));
},
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'Please enter valid ID.' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};