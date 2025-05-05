const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Health Check
app.get('/', (req, res) => {
  res.send('CrediKhaata API is running');
});

module.exports = app;
