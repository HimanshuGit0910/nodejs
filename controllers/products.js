const getAllProducts = async (req ,res)=>{
    res.status(200).json({msg :"i am getallproducts"})
};

const getAllProductstesting = async  (req ,res)=>{
    res.status(200).json({msg:"i am getallproductstesting"})
};

module.exports={getAllProducts,getAllProductstesting};