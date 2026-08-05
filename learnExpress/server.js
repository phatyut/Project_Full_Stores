const express = require("express");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("testing server")
});
app.locals.title = "My Express App";

console.dir(app.enable("love"));
console.log(app.locals.title);
app.listen(1234,()=>{
    console.log("server running on http://localhost:1234");
})