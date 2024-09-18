import dbConnect from '../../../lib/mongodb';
import Lead from '../../../models/Lead';

const handler = async (req, res) => {
    const { method } = req;
    const { id } = req.query; // Extract the ID from query parameters

    if (method === 'PUT') {
        try {
            await dbConnect();
            const { status } = req.body;

            // Ensure id and status are provided
            if (!id || !status) {
                return res.status(400).json({ error: 'ID and status are required' });
            }

            // Find the lead by ID and update the status
            const lead = await Lead.findByIdAndUpdate(
                id,
                { status },
                { new: true } // Return the updated document
            );

            if (!lead) {
                return res.status(404).json({ error: 'Lead not found' });
            }

            res.status(200).json({ message: 'Lead status updated', lead });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
