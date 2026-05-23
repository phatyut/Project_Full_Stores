const express = require("express");
const app = express();
app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

const ProductRouter = require("./Routes/Product.routes");
app.use("/api/products",ProductRouter);


app.use((err,req,res,next)=>{

    // check error when required 
    if(err.name == "ValidationError"){
        const catchError = Object.values(err.catchError);
        console.log(catchError)
    }
      // check error when delevopment

    if(process.env.NODE_ENV='developments'){
        res.status(404).json({
            checkStatus:false,
            name:err.name,
            error:err.message,
            stack:err.stack,
        })
    }else{
           res.status(404).json({
            checkStatus:false,
            error:err.message,
            
        })
    }
})

module.exports = app;