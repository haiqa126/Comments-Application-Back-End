module.exports = (app) => {
  const users = require("../controllers/signin.controller.js");

  var router = require("express").Router();

  // Check if user exist in the database for signin
  router.post("/checkuser", users.checkuser);

  app.use("/", router);
};
