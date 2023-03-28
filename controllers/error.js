const path = require("path");
const rootDir = require("../helper/path");
exports.get404 = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "pageNotFound.html"));
  }