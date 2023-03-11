const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = User;

// module.exports = (mongoose) => {
//   const User = mongoose.model(
//     "users",
//     mongoose.Schema({
//       email: String,
//       password: String,
//     })
//   );

//   return User;
// };
