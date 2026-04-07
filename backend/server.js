const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());

// Root route (for Render health check)
app.get('/', (req, res) => {
  res.send('API is running');
});

// API endpoint
app.post('/api/eligibility', (req, res) => {
  console.log("Request received:", req.body);

  const { age, status } = req.body;

  if (age === undefined || status === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Age and status are required'
    });
  }

  let eligible = false;
  let message = "Not eligible";

  if (age >= 18 && status === "unemployed") {
    eligible = true;
    message = "Eligible for support";
  }

  console.log("Sending response:", { eligible, message });

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