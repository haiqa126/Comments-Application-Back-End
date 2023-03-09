const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {}; // initializes an empty db object.
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Comments = require("./tutorial.model.js")(mongoose);
db.Users = require("./user.model.js")(mongoose);

module.exports = db;
