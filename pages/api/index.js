// pages/api/index.js
const express = require('express');
const app = express();
const { createServer } = require('@vercel/node'); // Create a server for Vercel

// Load environment variables
require('dotenv').config();

// Express route
app.get('/', (req, res) => {
    const password = process.env.CUSTOM_PASS; // Get password from environment variable
    res.json({
        password: password || 'Environment variable not set', // Default message if CUSTOM_PASS is not set
    });
});

// Export the app using createServer for Vercel compatibility
module.exports = createServer(app);