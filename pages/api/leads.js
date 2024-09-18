import dbConnect from '../../lib/mongodb';
import Lead from '../../models/Lead';

const handler = async (req, res) => {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const lead = new Lead({
                ...req.body,  // Use spread operator to include all fields from request body
                status: req.body.status || 'pending'  // Ensure status is included
            });
            await lead.save();
            res.status(201).json({ message: 'Lead successfully added' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const leads = await Lead.find({});
            res.status(200).json(leads);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (req.method === 'PUT') {
        try {
            const { id } = req.query;
            const { status } = req.body;

            if (!id || !status) {
                return res.status(400).json({ error: 'ID and status are required' });
            }

            const updatedLead = await Lead.findByIdAndUpdate(
                id,
                { status },
                { new: true }
            );

            if (!updatedLead) {
                return res.status(404).json({ error: 'Lead not found' });
            }

            res.status(200).json({ message: 'Lead status updated successfully', lead: updatedLead });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET', 'PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;
