const express = require("express");
const Router = express.Router();
const userController = require("../controllers/user");
Router.get("/users/:id", userController.displayUserId);
module.exports = Router;
