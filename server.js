// server.js
const express = require('express');
const app = express();

// Load environment variables
require('dotenv').config();

// Root route that returns a JSON response
app.get('/', (req, res) => {
  const password = process.env.CUSTOM_PASS; // Get password from environment variable
  res.json({
    password: password || 'Environment variable not set', // Default message if CUSTOM_PASS is not set
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
