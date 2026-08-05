const express = require("express");
const ProductRouter=express.Router();
ProductRouter
    .route("/")
    .get(getall);

module.exports= ProductRouter;