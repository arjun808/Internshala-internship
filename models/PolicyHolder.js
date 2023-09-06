const mongoose =require("mongoose")
const policyHolderSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
    ,
    Mobile_Number:{
          type:Number,
          required:true,
    }
    ,
    Adhar_Number:{
        type:Number,
        required:true,

    },
    Pan_Number:{
        type:String,
        required:true,

    }
    ,
    Adhar_URL:{
        type:String,
        required:true,
    }
    ,
    Pan_URL:{
        type:String,
        required:true,
    },
    Cancelled_Cheque_URL:{
        type:String,
        required:true,
    },
    Bank_statement_URL:{
        type:String,
        required:true,
    },
    
    Prescription_URL:{
        type:String,
        required:true,
    },
    
})

const policyHolder=mongoose.model("policyHolders",policyHolderSchema);
module.exports=policyHolder;