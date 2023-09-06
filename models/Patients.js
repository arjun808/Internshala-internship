const mongoose =require("mongoose")
const PatientSchema=new mongoose.Schema({
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
    }
})

const PatientsModel=mongoose.model("Patients",PatientSchema);
module.exports=PatientsModel;