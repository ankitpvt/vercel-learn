const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
// app.use(cors());
app.use(cors({
    origin: 'https://crm-frontend-tau-six.vercel.app',  // Your actual frontend deployment URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(bodyParser.json());

// Route
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  console.log(`Received message from ${name}: ${message}`);
  res.json({ status: 'success', message: `Thank you, ${name}! Your message has been received.` });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
