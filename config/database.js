const mongoose=require("mongoose");
require("dotenv").config();


  const  connect=()=>{
     try{
        mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useunifiedTopology:true}).then(console.log("db connection done")).catch((error)=>{
            console.log(error);
        })

     }
     catch{
        console.log("error while connecting to database");

     }
}
 module.exports={connect};