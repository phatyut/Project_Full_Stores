const express = require("express");
const fs = require("fs");
const app = express();
const productData=JSON.parse(fs.readFileSync("./jsonfile/Product.json","utf-8"));

app.use(express.json());

const port = 1234;
app.get("/",(req,res)=>{
    res.status(200).json({
        status:true,
        message:"please check path /product and work",
    })
})


app.get("/product",(req,res)=>{
    res.status(200).json({
        status:true,
        data:productData,
    })
})

app.get("/product/:id",(req,res)=>{
    const id = req.params.id;
    const showDataById= productData.find(element => element.id ==id);
    if(!showDataById){
        return res.status(404).json({
            error:"File not found!",
        })
    }

    res.json({
        status:true,
        data:showDataById,
    })
})


app.post("/product",(req,res)=>{
    const mydoc = req.body;
    res.status(201).json({
        status:true,
        data:mydoc
    })
})




app.listen(port,()=>{
    console.log("Sever Running on http://localhost"+ port);
})