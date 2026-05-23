const ProductModel = require("../Models/Products.models");
const getAll = async (req, res, next) => {
    try {
        const searchQuery = {};
        const search = req.query.search;
        let sortQuery = {};
        if (req.query.sort) {
            sortQuery = req.query.sort;
        } else {
            sortQuery = "-_Id"
        }
        if (search) {
            searchQuery["$or"] = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ]
        }
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 1;
        const skipPage = (page - 1) * limit;
        const DocProduct = await ProductModel.find(searchQuery)
                                             .sort(sortQuery)
                                             .skip(skipPage)
                                             .limit(limit);
        const totalDoc  = await ProductModel.countDocuments(searchQuery);
        const totalPage = Math.ceil(totalDoc / limit);
        console.log(totalPage);
        
        res.status(200).json({
            checkStatus: true,
            data: DocProduct,
        })
    } catch (err) {
        next(err);
    }
};


const createProduct = async (req, res,next) => {
    try{
        const newProduct = await ProductModel.create(req.body);
        res.status(201).json({
            checkStatus: true,
            data: newProduct,
        })
    }catch(err){
        next(err);
    }
}


const updateProduct = async (req, res,next) => {
    try {
        const id = req.params.id;
        const getid = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, getid, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            checkStatus: true,
            data: updatedProduct
        })
        console.log(getid);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    getAll,
    createProduct,
    updateProduct,
}