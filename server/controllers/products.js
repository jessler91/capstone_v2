  
// Controllers File

const mysql = require('mysql')
const pool = require('../sql/connection')


// Get All Products
function getProducts(req, res) {

    let sql = `SELECT ?? FROM ??`
    sql = mysql.format(sql, ['*', 'products',]);

    pool.query(sql, (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('An unexpected error occurred')
        }
        console.log(res.json(rows));
        return res.json(rows);
    });

}


// Get One Product
function getProductsById(req, res) {
    
    const merchantId = req.params.id;

    let sql = `SELECT ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['*', 'products', 'merchant_sku', merchantId])
        console.log(merchantId);

    pool.query(sql, (err, rows) => {
        if (err) {
            console.log({ 'message': 'Error occurred: ' + err })
            return res.status(500).send('An unexpected error occurred')
        }
        console.log(res.json(rows))
        return res.json(rows);
    })

}



module.exports = {
    getProducts,
    getProductsById,
    // addProduct,
    // deleteProduct,
}