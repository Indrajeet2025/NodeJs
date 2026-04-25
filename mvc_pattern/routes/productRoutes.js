const express = require("express");
const router = express.Router();
const { getProducts } = require(`../controllers/productController.js`);
const { addProduct } = require(`../controllers/productController.js`);
const { updateProduct } = require(`../controllers/productController.js`);
const { deleteProduct } = require(`../controllers/productController.js`);
// products related routes
router.get(`/products`, getProducts);
router.post(`/products`, addProduct);
router.put(`/products/:id`, updateProduct);
router.delete(`/products/:id`, deleteProduct);

module.exports = router;
