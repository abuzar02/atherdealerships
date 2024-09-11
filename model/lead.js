import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  partnershipType:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
});


const Leads = mongoose.models.lead || mongoose.model("lead", LeadSchema);

export default Leads;
