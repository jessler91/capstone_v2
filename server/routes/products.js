// Routes File

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');


router.get ('/products', productsController.getProducts);
router.get ('/products/:id', productsController.getProductsById);

// router.get ('/products2', productsController.getProducts2);
// router.get ('/products2/:id', productsController.getProducts2ById);

router.get ('/products/sales', productsController.getSales);
router.get ('/products/sales/:id', productsController.getSalesById);

// router.post ("/products", productsController.addProduct);
// router.delete ("/products/:id", productsController.deleteProduct);

module.exports = router;