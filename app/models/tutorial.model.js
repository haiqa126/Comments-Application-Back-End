module.exports = (mongoose) => {
  const Comments = mongoose.model(
    "comment",
    mongoose.Schema({
      text: String,
    })
  );

  return Comments;
};
