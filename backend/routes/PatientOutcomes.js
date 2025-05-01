// routes/PatientOutcomes.js
const express = require('express');
const router = express.Router();
const PatientOutcome = require('../models/PatientOutcomes');

router.get('/', async (req, res) => {
  try {
    const data = await PatientOutcome.findOne(); // Adjust query as needed
    if (!data) {
      return res.status(404).json({ message: "No dashboard data found" });
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching patient outcomes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
