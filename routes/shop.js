/*const path = require("path");
const express = require("express");
const productsController = require('../controllers/products');

const rootDir = require("../helper/path");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
*/

const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
