const mongoose= require("mongoose")
const otherDetailSchema=new mongoose.Schema({
    Smoking:{
        type:Boolean,
        required:true
        
    },
    Diabetes:{
        type:Boolean,
        required:true
    },
    insurer:{
        type:Boolean,
        required:true
    },
    Alcohol:{
      type:Boolean,
      required:true
    },
    Hypertension:{
        type:Boolean,
        required:true,
    }
})
const other =mongoose.model("otherDetails",otherDetailSchema)
module.exports=other;

