const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");
const router = express.Router();

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactPage.html"));
});

router.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
