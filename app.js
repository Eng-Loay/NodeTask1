const express = require("express");
const userRoutes = require("./routes/user");
const itemRoutes = require("./routes/items");
const app = express();
app.get("/", (req, res, next) => {
  res.json("Welcome To Hazem Task!");
});
app.get("/about", (req, res, next) => {
  res.json("This website is to finish hazeem!");
});
app.use(userRoutes);
app.use(itemRoutes);
app.listen(4000, () => {
  console.log("Server Running");
});
