// import dbConnect from '../../lib/mongodb';
// import Lead from '../../models/Lead';

// export default async function handler(req, res) {
//     await dbConnect();
    
//     // Define static admin credentials
//     const adminEmail = 'admin@login.com';
//     const adminPassword = 'admin123';

//     if (req.method === 'POST') {
//         const { email, password } = req.body;

//         // Admin login check
//         if (email === adminEmail && password === adminPassword) {
//             return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
//         }

//         // User login check by searching for mobile number in leads collection
//         try {
//             const lead = await Lead.findOne({ email }); // Assuming the number field is used for mobile numbers
//             if (lead && password === lead.number) { // Assuming password = mobile number
//                 return res.status(200).json({ message: 'User login successful', role: 'user' });
//             } else {
//                 return res.status(401).json({ message: 'Invalid mobile number or password' });
//             }
//         } catch (error) {
//             return res.status(500).json({ message: 'Error during login', error: error.message });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }


// import dbConnect from '../../lib/mongodb';
// import Lead from '../../models/Lead';

// export default async function handler(req, res) {
//     await dbConnect();

//     const adminEmail = 'admin@login.com';
//     const adminPassword = 'admin123';

//     if (req.method === 'POST') {
//         const { email, password } = req.body;

//         // Admin login check
//         if (email === adminEmail && password === adminPassword) {
//             return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
//         }

//         // User login check by searching for mobile number in leads collection
//         try {
//             const lead = await Lead.findOne({ email }); // Searching for the email/mobile in the database
//             if (lead && password === lead.number) { // Assuming password = mobile number
//                 return res.status(200).json({ message: 'User login successful', role: 'user' });
//             } else {
//                 return res.status(401).json({ message: 'Invalid mobile number or password' });
//             }
//         } catch (error) {
//             return res.status(500).json({ message: 'Error during login', error: error.message });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }
//  import dbConnect from '../../lib/mongodb';
//  import Lead from '../../models/Lead';
// export default async function handler(req, res) {
//     try {
//         await dbConnect();
//         console.log('Connected to database');

//         const adminEmail = 'admin@login.com';
//         const adminPassword = 'admin123';

//         if (req.method === 'POST') {
//             const { email, password } = req.body;

//             if (email === adminEmail && password === adminPassword) {
//                 return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
//             }

//             const lead = await Lead.findOne({ email });
//             console.log(lead);
            
//             if (lead && password === lead.number) {
//                 return res.status(200).json({ message: 'User login successful', role: 'user' });
//             } else {
//                 return res.status(401).json({ message: 'Invalid mobile number or password' });
//             }
//         } else {
//             res.setHeader('Allow', ['POST']);
//             res.status(405).end(`Method ${req.method} Not Allowed`);
//         }
//     } catch (error) {
//         console.error('Error connecting to database:', error.message);
//         return res.status(500).json({ message: 'Internal Server Error', error: error.message });
//     }
// }

import dbConnect from '../../lib/mongodb';
import Lead from '../../models/Lead';

export default async function handler(req, res) {
    try {
        // Establish MongoDB connection
        await dbConnect();

        // Define static admin credentials
        const adminEmail = 'admin@login.com';
        const adminPassword = 'admin123';  // Missing adminPassword variable fixed here

        if (req.method === 'POST') {
            const { email, password } = req.body;  // Get email and password from request

            // Admin login check
            if (email === adminEmail && password === adminPassword) {
                return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
            }

            // User login check by searching for mobile number in leads collection
            const lead = await Lead.findOne({ email});  // Case-insensitive email search

            if (lead && password === lead.number) {  // Assuming password is the user's mobile number
                return res.status(200).json({ message: 'User login successful', role: 'user' });
            } else {
                return res.status(401).json({ message: 'Invalid mobile number or password' });
            }
        } else {
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ message: 'Error during login', error: error.message });
    }
}
