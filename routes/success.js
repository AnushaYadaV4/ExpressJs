const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send('<h1>Form successfuly filled".</h1>');
});

module.exports = router;
