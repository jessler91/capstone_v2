// Controllers File

const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')



// Get All Products Inventory
function getProducts(req, res) {

    let sql = `SELECT ?? FROM ??`
    sql = mysql.format(sql, ['*', 'inventory',]);

    pool.query(sql, (err, rows) => {
        if (err) {
            return handleSQLError()
        }
        // console.log(res.json(rows));
        res.json(rows);
        return;
    });

}


// Get One Product Inventory
function getProductsById(req, res) {
    
    const merchantId = req.params.id;

    let sql = `SELECT ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['*', 'inventory', 'sku', merchantId])

    pool.query(sql, (err, rows) => {
        if (err) { 
            return handleSQLError()
        }
        res.json(rows);
        return;
    })

}




// Sales Products Controllers

// Get All Products Sales
function getSales(req, res) {

    let sql = `SELECT ?? FROM ??`
    sql = mysql.format(sql, ['*', 'sales30']);

    pool.query(sql, (err, rows) => {
        if (err) {
            return handleSQLError()
        }
        // console.log(res.json(rows));
        res.json(rows);
        return;
    });

}

// Get One Products Sales Data
function getSalesById(req, res) {
    
    const ASIN = req.params.id;

    let sql = `SELECT ?? FROM ?? WHERE ?? = ? `
    sql = mysql.format(sql, ['*', 'sales30', 'Child_ASIN', ASIN])

    pool.query(sql, (err, rows) => {
        if (err) { 
            return handleSQLError()
        }
        res.json(rows);
        return;
    })

}




module.exports = {
    getProducts,
    getProductsById,
    getSales,
    getSalesById,
    // addProduct,
    // deleteProduct,
}