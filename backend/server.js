const express = require('express');
const cors = require('cors'); // For handling cross-origin requests

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Add a basic GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Sign Language Translation API');
});

// API endpoint to receive text input and simulate translation
app.post('/api/translate', (req, res) => {
  const { text } = req.body;

  // Validate input
  if (!text) {
    return res.status(400).json({ error: "Text input cannot be empty." });
  }

  // Simulate translation
  const simulatedTranslation = `Translated '${text}' to sign language.`;

  // Send response
  res.status(200).json({
    message: 'Translation successful.',
    original_text: text,
    translated_text: simulatedTranslation
  });
});

// // Add a basic GET route for the root URL
// app.get('/', (req, res) => {
//     res.send('Welcome to the Sign Language Translation API');
//   });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
