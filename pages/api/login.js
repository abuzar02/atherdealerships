// pages/api/login.js
export default function handler(req, res) {
    // Define a static email and password for simplicity
    const adminEmail = 'admin@login.com';
    const adminPassword = 'admin123';
  
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      if (email === adminEmail && password === adminPassword) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  