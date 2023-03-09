//! Important information
//In an Express application,
// a controller.js file defines the logic for handling
//  requests that are sent to a specific route. The routes file,
//  on the other hand, defines the routes
// for the application and specifies which controller function should handle each route.

module.exports = (app) => {
  const comments = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", comments.create);

  // Retrieve all Tutorials
  router.get("/all", comments.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);  //one part + two part  /api/comments/all

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/", router);
};
