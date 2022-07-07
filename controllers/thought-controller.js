const Thought = require('../models/Thought');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Please enter valid ID.' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};