const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");

const router = express.Router();
const successController=require('../controllers/success')

router.get("/", successController.getSuccess);

module.exports = router;
