// Index File Week2 Day #2 - Justin Essler 

// import 3rd party
const express = require("express");
const bodyParser = require("body-parser");

// import 1st party
// const contacts = require("./data/contacts");
// const comments = require("./data/comments");
// const products = require("./data/products");
// const vehicles = require("./data/vehicles");
const contactsRoutes = require("./routes/contacts");
const commentsRoutes = require("./routes/comments");
const productsRoutes = require("./routes/products");
const vehiclesRoutes = require("./routes/vehicles");

// variables
const app = express();
const port = process.env.PORT || 5000;

// middleware - express, bodyParser, and routes middleware
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);

// Default Route
app.get('/', (req, res) => res.send('default route'))


// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


