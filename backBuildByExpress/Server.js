const app = require("./App");


const dotenv = require("dotenv");
dotenv.config({path:"./env/config.env"});

const morgan = require("morgan");
app.use(morgan("dev"));

const connectToDatabase = require("./database/db");
connectToDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})