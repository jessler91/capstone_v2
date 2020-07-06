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
        `Welcome to Justins Capstone Server V2  -  My final project goal is to create a dashboard of Amazon FBA inventory items, I am hoping to use real data from a active selling account, but will use a demo account dataset if I am unable. For each submitted inventory item, the application will display the current inventory and the forecasted inventory projections for the future 90 days.`)
});

// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});



