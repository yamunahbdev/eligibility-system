const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());

// API endpoint
app.post('/api/eligibility', (req, res) => {
  const { age, status } = req.body;

  // ✅ Validation
  if (age === undefined || status === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Age and status are required'
    });
  }

  // Additional validation (professional touch)
  if (age < 0) {
    return res.status(400).json({
      success: false,
      error: 'Age must be a positive number'
    });
  }

  // ✅ Rule logic (IA-style)
  let eligible = false;
  let message = "Not eligible";

  if (age >= 18 && status === "unemployed") {
    eligible = true;
    message = "Eligible for support";
  }

  // ✅ Structured response (industry standard)
  res.json({
    success: true,
    data: {
      eligible,
      message
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});