/*const path = require("path");
const express = require("express");
const productsController = require('../controllers/products');

const rootDir = require("../helper/path");

const router = express.Router();

router.get("/", productsController.getProducts);

module.exports = router;
*/

/*const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
*/

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);


module.exports = router;