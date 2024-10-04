const express = require("express");
const Router = express.Router();
const ItemController = require("../controllers/item");

Router.get("/items", ItemController.filterItem);
module.exports = Router;
