// require from buildIn function
const express = require("express");
// require from local file
const ProductRouter = require("./controllers/Product.controller");

const app = express();
app.use(express.json());

app.use("/products", ProductRouter);


module.exports = app ;
