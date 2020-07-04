// Database Error Handler


const handleSQLError = (res, err) => {
    console.log('SQL Database Error: ', err)
    return res.status(500).send('An unexpected error occurred');
}
  


module.exports = { handleSQLError }