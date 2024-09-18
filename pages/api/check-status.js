import dbConnect from '../../lib/mongodb';
import Lead from '../../models/Lead';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            await dbConnect();
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ error: 'Email is required' });
            }

            const lead = await Lead.findOne({ email });

            if (!lead) {
                return res.status(404).json({ error: 'No lead found with this email' });
            }

            res.status(200).json({
                name: lead.name,
                email: lead.email,
                type: lead.property,  // Change this field if needed
                status: lead.status,
                date: lead.date,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
