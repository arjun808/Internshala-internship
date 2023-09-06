const express = require("express");
const app = express();
const fileUploader= require("express-fileupload");
app.use(express.json());
const cloudinary=require("./config/cloudinary")
const database=require("./config/database");
cloudinary.cloudinaryConnect();
database.connect();
app.use(fileUploader({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
const Details=require("./routes/Details")
app.use("/api/v1/details",Details);
app.listen(3000,(req,res)=>{
    console.log("ram ram bhai sariya ne apna server poty number 3000 par chalu ho gya h");
})