const cloudinary = require("cloudinary").v2
const patientsdb=require("../models/Patients")
const policyHolderDb=require("../models/PolicyHolder");
const otherDB=require("../models/OtherDetail");
const BankDB= require("../models/BankDetails")
 async function uploadCloudinary (file,folder){
    const options={folder}
    return await cloudinary.uploader.upload(file.tempFilePath,options)
 } 


exports.Patients=async(req,res)=>{
    const {Name,Email,Mobile_Number,Adhar_Number,Pan_Number}=req.body;
    const Adhar_File=req.files.Adhar;
    // console.log(Adhar_File);
    const Pan_File=req.files.Pan;
    // console.log(req.body.name);
  
    const responceA= await uploadCloudinary(Adhar_File,"dummy")

    const responceP= await uploadCloudinary(Pan_File,"dummy")
      const data=await patientsdb.create({
        Name,
        Email,
        Mobile_Number,
        Adhar_Number,
        Pan_Number,
        Adhar_URL:responceA.secure_url,
        Pan_URL:responceP.secure_url,

     })
   return res.json({
    seccess:true,
    message:"Patients Data is saved on mongoDb successfulyy and the uploaded file saved in cloudinary and there url is saved in mongo"
   })
   
    
    // console.log(fil);

}
exports.policyHolder=async(req,res)=>{
try{
    
    const same_as_that_of_patients=req.body.same_as_that_of_patients;
    const email=req.body.Email;
    // console.log(email,same_as_that_of_patients)
    //i have to use this variable as i can not use check box in postman so by this we uese true or false value
    if(same_as_that_of_patients=="true"){
      
        const Cancelled_cheque=req.files.Cancelled_cheque
        const Bank_statement=req.files.Bank_statement
        const prescription=req.files.prescription
        const resC=await uploadCloudinary(Cancelled_cheque,"dummy");
        const resB=await uploadCloudinary(Bank_statement,"dummy")
        const resp=await uploadCloudinary(prescription,"dummy")
        
         const temp= await patientsdb.findOne({Email:email});
        //  console.log(temp);
         if(temp){
    //        
            const data=await policyHolderDb.create({
                Name:temp.Name,
                Email:temp.Email,
                Mobile_Number:temp.Mobile_Number,

                Adhar_Number:temp.Adhar_Number,
                Pan_Number:temp.Pan_Number,
                Adhar_URL:temp.Adhar_URL,
                Pan_URL:temp.Pan_URL,
                Cancelled_Cheque_URL:resC.secure_url,
                Bank_statement_URL:resB.secure_url,
                Prescription_URL:resp.secure_url,


        
             })
         }
         else{
            const {Name,Email,Mobile_Number,Adhar_Number,Pan_Number}=req.body;
            const Adhar_File=req.files.Adhar;
            // console.log(Adhar_File);
            const Pan_File=req.files.Pan;
            // console.log(req.body.name);
          
            const responceA= await uploadCloudinary(Adhar_File,"dummy")
        
            const responceP= await uploadCloudinary(Pan_File,"dummy")
              const data=await patientsdb.create({
                Name,
                Email,
                Mobile_Number,
                Adhar_Number,
                Pan_Number,
                Adhar_URL:responceA.secure_url,
                Pan_URL:responceP.secure_url,
                Cancelled_Cheque_URL:resC.secure_url,
                Bank_statement_URL:resB.secure_url,
                Prescription_URL:resp.secure_url,

        
             })
         
           
            
         }
        

         return res.json({
            seccess:true,
            message:"policy holder data saved in DB successfully and the uploaded files is saved in cloudinary and there url link is saved in mongoDb"
           })
    } 

}catch(err){
    console.log(err);
}}
exports.BankDetail=async(req,res)=>{
    try{
        const {Lending_Module, Net_Banking,Debit_Card,Bank_Name}=req.body;
        console.log(req.body);
        const file=req.files.Bank_Doc;
        const responce= await uploadCloudinary(file,"dummy");
        const data=BankDB.create({
            Lending_Module,
            Net_Banking,
            Debit_Card,
            Bank_Name:Bank_Name,
            Bank_doc_URL:responce.secure_url
    
        })
       return res.status(200).json({
            success:true,
            message:"Bank Details Saved Succesfully"
        })
    }catch(err){
        console.log(err);
    }
  


}
exports.otherDetails=async(req,res)=>{
    try{
        const {Smoking,Diabetes,insurer,Alcohol,Hypertension}=req.body;
        const data=await otherDB.create({
            Smoking,
            Diabetes,
            insurer,
            Alcohol,
            Hypertension
        })
        return res.status(200).json({
            success:true,
            message:"Other Details saved in database Successfully"
        })

    }catch(err){
        console.log(err);

    }
   

}