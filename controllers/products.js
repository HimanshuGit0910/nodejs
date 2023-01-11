const Product=require("../models/products");


const getAllProducts = async (req ,res)=>{
//     const {company, name}=res.query;
// const queryObject={};

// if(company,name){
//     queryObject.company=company;
   // queryObject.name =name;
// }
// if(name){
//     // queryObject.company=company;
//     queryObject.name ={$regex:name,$options:"i"};
// }

    const  Himanshu = await Product.find(req.query);
    res.status(200).json({Himanshu})
};


const getAllProductstesting = async  (req ,res)=>{
    const Himanshu= await Product.find(req.query);
    console.log(req.query);
    res.status(200).json({Himanshu})
};

module.exports={getAllProducts,getAllProductstesting};