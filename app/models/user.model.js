module.exports = (mongoose) => {
  const Users = mongoose.model(
    "users",
    mongoose.Schema({
      email: String,
      password: String,
    })
  );

  return Users;
};
