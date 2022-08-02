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
  postThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
// Server will crash if making a DELETE request returns 404
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Please enter valid ID.' })
          : Application.deleteMany({ _id: { $in: thought.reactions } })
      )
      .then(() => res.json({ message: 'Thought removed.' }))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'Please enter valid ID.' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  postReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { runValidators: true, new: true }
    )
      .then(thought => {
        if (!thought) {
          res
            .status(404)
            .json({ message: 'Please enter valid ID.' })
          return;
        }
        res.json(thought)
      })
      .catch((err) => res.status(500).json(err));
  },
// Server will crash if making a DELETE request returns 404
  deleteReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then(thought => {
        if (!thought) {
          res
            .status(404)
            .json({ message: 'Please enter valid ID.' })
          return;
        }
        res.json(thought)
      })
      .catch((err) => res.status(500).json(err));
  },
};