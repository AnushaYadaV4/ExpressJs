const path = require("path");
const rootDir = require("../helper/path");



exports.getContactUs=(req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactPage.html"));
  }

exports.postContactUs= (req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
  } 