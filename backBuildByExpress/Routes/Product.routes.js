const express = require("express");
const ProductRouter = express.Router();

const {
            getAll,
            createProduct,
            updateProduct
            
    } = require("../Controllers/Product.controller");

ProductRouter
    .route("/")
    .get(getAll)
    .post(createProduct);
ProductRouter
    .route("/:id")
    .patch(updateProduct);


module.exports = ProductRouter;