const Product=require("../models/products");

const getAllProducts = async (req ,res)=>{
    const myData= await Product.find({});
    res.status(200).json({myData})
};

const getAllProductstesting = async  (req ,res)=>{
    res.status(200).json({msg:"i am getallproductstesting"})
};

module.exports={getAllProducts,getAllProductstesting};