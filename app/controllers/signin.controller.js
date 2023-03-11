// const db = require("../models/user.model");
// const User = db.users;

const User = require("../models/user.model");

// Create and Save a new Comment
exports.checkuser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //making sure email and password are not empty
  if (!email && !password) {
    res.status(402).send({ message: "email and password cannot be empty" });
    return;
  }

  User.findOne({ email, password })
    .then((user) => {
      console.log("whats user");
      console.log("whats email and password");
      console.log(email);
      console.log(password);

      console.log(user); //??????????????????
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ message: "Login successful" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
