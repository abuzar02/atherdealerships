import dbConnect from '../../lib/mongodb';
import Lead from '../../models/Lead';

export default async function handler(req, res) {
    await dbConnect();
    
    // Define static admin credentials
    const adminEmail = 'admin@login.com';
    const adminPassword = 'admin123';

    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Admin login check
        if (email === adminEmail && password === adminPassword) {
            return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
        }

        // User login check by searching for mobile number in leads collection
        try {
            const lead = await Lead.findOne({ email }); // Assuming the number field is used for mobile numbers
            if (lead && password === lead.number) { // Assuming password = mobile number
                return res.status(200).json({ message: 'User login successful', role: 'user' });
            } else {
                return res.status(401).json({ message: 'Invalid mobile number or password' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Error during login', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
