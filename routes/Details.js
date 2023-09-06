const express = require("express");
const router= express.Router();
const {Patients}=require("../controller/PatientsData");
const {policyHolder,BankDetail,otherDetails}= require("../controller/PatientsData")

router.post("/formdata",Patients);

router.post("/policyholder",policyHolder);
router.post("/bank",BankDetail);
router.post("/otherDetails",otherDetails);
module.exports=router;