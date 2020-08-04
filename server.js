const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const path = require("path");
const productsRoutes = require("./server/routes/products");
const usersRoutes = require('./server/routes/users')


const app = express();
const port = process.env.PORT || 5000;


// middleware - express, bodyParser, and routes middleware
app.use(express.static("public"))
app.use(bodyParser.json())
// app.use(cors());
app.use(productsRoutes);
app.use(usersRoutes)
// app.use("/", productsRoutes);


// Default Route
app.get('/', (req, res) => {
    res.json(
        `Welcome to Justins Capstone Server V2 not production`)
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

  app.get('/', (req, res) => {
    res.json(
        `Welcome to Justins Capstone Server V2 production`)
});


}
else {
  app.get('/', (req, res) => {
    res.json(
        `Welcome to Justins Capstone Server V2 not production`)
});
}



// start listening on server ${port}
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});



