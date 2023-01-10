const monogoose = require("mongoose");

const connectDB =(uri)=> {
    return monogoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports=connectDB;