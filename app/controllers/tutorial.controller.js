const db = require("../models");
const Comment = db.Comments;

// Create and Save a new Comment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.data.text) {
    res.status(402).send({ message: "Content can not be empty!"});
    return;
  }

  // Create a Comment
  const comment = new Comment({
    text: req.body.data.text,
  });

  // Save Comment in the database
  comment
    .save(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment.",
      });
    });
};

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
  const text = req.query.text;

  Comment.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Comments.",
      });
    });
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {};

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {};

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {};
