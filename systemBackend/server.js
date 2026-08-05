
const app = require("./App");
app.get("/",(req,res)=>{
    res.send("testing server")
})

const port =9090;
app.listen(port,()=>{
    console.log("Server running on http://localhost:"+port);
})