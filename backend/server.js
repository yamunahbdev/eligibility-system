const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint
app.post('/api/eligibility', (req, res) => {
  const { age, status } = req.body;

  // Validation
  if (!age || !status) {
    return res.status(400).json({
      error: 'Age and status are required'
    });
  }

  // Rule logic (IA-style)
  let eligible = false;
  let message = "Not eligible";

  if (age >= 18 && status === "unemployed") {
    eligible = true;
    message = "Eligible for support";
  }

  res.json({
    eligible,
    message
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});