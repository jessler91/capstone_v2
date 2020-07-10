// ACA Capstone Server Index File

// import 3rd party
const express = require("express");
const bodyParser = require("body-parser");

// import 1st party
const productsRoutes = require("./routes/products");
const usersRoutes = require('./routes/users')

// variables
const app = express();
const port = process.env.PORT || 5000;

// middleware - express, bodyParser, and routes middleware
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(productsRoutes);
app.use(usersRoutes)
// app.use("/", productsRoutes);


// Default Route
app.get('/', (req, res) => {
    res.json(
        `Welcome to Justins Capstone Server V2`)
});

// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});



