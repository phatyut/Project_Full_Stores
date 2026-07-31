const express = require("express");
const app = express();
const port = 9090;
app.get("/",(req,res)=>{
    res.send("please check my status");
});
app.get("/Product",(req,res)=>{
    res.json({
        status:"true",
        message:"Product is used",
    })
})

app.listen(port ,()=>{
    console.log("Server runnig on http://localhost:"+port );
})