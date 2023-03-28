const path = require("path");
const express = require("express");
const rootDir = require("../helper/path");
const router = express.Router();

const contactUsController=require('../controllers/contactUs')

router.get("/contact-us", contactUsController.getContactUs);

router.post("/contact-us", contactUsController.postContactUs);

module.exports = router;
