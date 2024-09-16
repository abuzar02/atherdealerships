// pages/api/proxy.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwUVBNnoCCQiVVEynpWJRwgXZVIUdXeoAOyi8D-vCuyeeayXYxnCRFGW8hT7pDGWA/exec', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.text();
        res.status(200).send(data);
      } else {
        res.status(response.status).send('Error');
      }
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
  