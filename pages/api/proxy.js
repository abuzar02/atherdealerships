// pages/api/proxy.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzsKaBeW4EnSnfG8zKmimu-5JPBjSf8IJ1wm0I3Nw1WkW5PIcsmIdtp5RD9C229pgKi/exec', {
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
  