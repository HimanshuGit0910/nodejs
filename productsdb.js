require("dotenv").config();
const connectDB=require("./db/connects");
const products = require("./models/products");
const Product =require("./models/products");
const productjson=require("./products.json");


const start =async()=>{
    try{
        await connectDB(process.env.Mongodb_Url);
        await Product.deleteMany();
        console.log("sucesss");
        await Product.create(productjson);

    }catch{error}{};
};
start();