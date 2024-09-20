import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    pincode: { type: String, required: true },
    email: { type: String, required: true, unique:true},
    address: { type: String, required: false },
    calling_time: { type: String, required: false },
    qualification: { type: String, required: true },
    investment: { type: String, required: true },
    property: { type: String, required: true },
    remark: { type: String, required: false },
    partnershipType: { type: String, required: true },
    status: {
        type: String,
        default: 'pending'  // Default value is 'pending'
    },
    date: { type: Date, default: Date.now },
});

const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default Lead;
