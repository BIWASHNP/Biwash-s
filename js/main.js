// Import required modules
const express = require('express');
const app = express();
const PORT = 3000;

// Define a GET endpoint
app.get('/hello', (req, res) => {
  res.json({
    message: "Hello, Biwash Portfolio!",
    status: "success"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
