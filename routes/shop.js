const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("products are added!!!");
  res.send("<h1>Products are added</h1>");
});

module.exports = router;
