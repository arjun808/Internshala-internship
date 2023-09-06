const mongoose=require('mongoose');

const bankSchema=new mongoose.Schema({
    Lending_Module:{
        type:String,
        required:true,

    },
    Net_Banking:{
        type:Boolean,
        required:true,

    },
    Debit_Card:{
        type:Boolean,
        required:true,
    }
    ,
    Bank_Name:{
        type:String,
        required:true,
       
    },
    Bank_doc_URL:{
        type:String,
        required:true,
    }
})
const Bankmodel = mongoose.model("BankDetails",bankSchema);
module.exports=Bankmodel;