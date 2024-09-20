import dbConnect from '../../lib/mongodb';
import Lead from '../../models/Lead';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            // Find the user in the database by email
            const lead = await Lead.findOne({ email });

            if (lead) {
                // Return user details
                return res.status(200).json({
                    name: lead.name,      // Ensure the Lead model has a name field
                    email: lead.email,
                    type: lead.partnershipType,      // Ensure the Lead model has a type field
                    status: lead.status,   // Ensure the Lead model has a status field
                    date: lead.date,  // Example field for date
                });
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
