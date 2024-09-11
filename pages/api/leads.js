import dbConnect from "../../config/dbConnect";
import Leads from "../../model/lead";



export default async function handler (req,res){
    await dbConnect();

    if(req.method === "POST"){
        const {
            name,
             email,
             number,
             pincode,
             qualification,
             partnershipType


        }= req.body;
        try {
           
            const newLead = new Leads({
                name,
                email,
                number,
                pincode,
                qualification,
                partnershipType
            });
            await newLead.save();
            res.status(201).json({success:true,message: "Lead created successfully"})
        } catch (error) {
          res.status(500).json({success:false, message:"dbconnection error"})
        }
    }else{
        res.status(405).json({ success: false, error: "Method not allowed" });
    }
}