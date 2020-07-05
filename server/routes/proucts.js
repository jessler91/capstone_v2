// Routes File

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');


router.get ('/products', productsController.getProducts);
router.get ('/products/:id', productsController.getProductsById);
router.post ("/products", productsController.addProduct);
// router.put ("/products/:id", productsController.updateUser);
router.delete ("/products/:id", productsController.deleteProduct);

module.exports = router;