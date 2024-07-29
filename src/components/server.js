const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

// Mock messages data (replace with actual database integration in production)
const messages = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, this is a test message!',
    date: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    message: 'Another test message here.',
    date: new Date().toISOString()
  }
];

// Endpoint to fetch messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
