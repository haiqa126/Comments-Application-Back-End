const db = require("../models");
const User = db.Users; //retrieves the Comment model from the db module.

// Create and Save a new Comment
exports.checkuser = (req, res) => {
  const { email, password } = req.body;

  //making sure email and password are not empty
  if (email && password) {
    res.status(402).send({ message: "email and password cannot be empty" });
    return;
  }

  User.findOne({ email, password })
    .then((user) => {
      console.log("whats user");
      console.log(user);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Login successful" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
