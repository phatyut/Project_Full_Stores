const {default:mongoose} = require("mongoose");
const ProductSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String
    }
},{timestamps:true});



// ProductSchema.index(
//     {
//         name:"text",
//         description:"text"
//     },
   
// );

const ProductModel = mongoose.model("ProductModel",ProductSchema)
module.exports = ProductModel;