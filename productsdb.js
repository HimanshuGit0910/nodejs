require("dotenv").config();
const connectDB=require("./db/connects");
const Product =require("./models/products");
const productjson=require("./products.json");

const start =async()=>{
    try{
        await connectDB(process.env.Mongodb_Url);
        await Product.create(productjson);

    }catch{error}{};
};
start();