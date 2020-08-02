const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");
const productsRoutes = require("./server/routes/products");
const usersRoutes = require('./server/routes/users')

const app = express();
const port = process.env.PORT || 5000;


// middleware - express, bodyParser, and routes middleware
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(productsRoutes);
app.use(usersRoutes)
// app.use("/", productsRoutes);
// app.use(express.static(path.join(_dirname, './public')))


// Default Route
app.get('/', (req, res) => {
    res.json(
        `Welcome to Justins Capstone Server V2`)
});

// Serve Static Assits if in production
// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));
  
    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }



// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});



