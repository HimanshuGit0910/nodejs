require("dotenv").config();
const express = require('express')
const app = express()
const ConnectDb = require("./db/connects");
const port = process.env.env ||5000

const products_routes=require("./route/products");

app.get('/', (req, res) => {
  res.send('Hi we live ');
});

app.use("/api/poducts",products_routes);

const start =async() => {
    try{
      await ConnectDb(process.env.Mongodb_Url);
        app.listen(port,()=>{
            console.log(`${port}we are ok felling is good`);
        });
    } catch(error){
      console.log(error);        
    }
}
start();