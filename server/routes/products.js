// Routes File

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get ('/products', productsController.getProducts);
router.get ('/products/:id', productsController.getProductsById);
router.get ('/products/sales', productsController.getSales);
router.get ('/products/sales/:id', productsController.getSalesById);

// router.post ("/products", productsController.addProduct);
// router.delete ("/products/:id", productsController.deleteProduct);

module.exports = router;