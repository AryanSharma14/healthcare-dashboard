const express = require('express');
const router = express.Router();

// Sample data for testing
const dashboardData = {
  recoveryRate: 92,
  readmissionRate: 8,
  mortalityRate: 2,
  avgLengthOfStay: 5,
  summary: {
    totalPatients: 320,
    improvedPercent: 85,
    criticalPercent: 5,
  },
  recoveryOverTime: [
    { month: 'Jan', rate: 88 },
    { month: 'Feb', rate: 91 },
    { month: 'Mar', rate: 93 },
    { month: 'Apr', rate: 96 },
    { month: 'May', rate: 97 },
    { month: 'Jun', rate: 98 },
  ],
  readmissionCauses: [
    { cause: "Infection", count: 30 },
    { cause: "Surgical Complications", count: 20 },
    { cause: "Medication Issues", count: 15 },
    { cause: "Other", count: 10 },
  ],
  recentPatients: [
    { name: "John Doe", status: "Recovered", admitted: "2025-03-01", discharged: "2025-03-10" },
    { name: "Jane Smith", status: "In Treatment", admitted: "2025-03-15", discharged: "-" },
    { name: "Robert Brown", status: "Critical", admitted: "2025-03-20", discharged: "-" },
  ],
  hospitalIncidents: [
    { type: "Infections", count: 12 },
    { type: "Transfusion Reactions", count: 4 },
    { type: "Bed Sores", count: 9 },
    { type: "Respiratory Failure", count: 5 },
    { type: "Pulmonary Embolism", count: 3 },
    { type: "Postoperative Sepsis", count: 7 },
    { type: "Hip Fracture", count: 2 },
    { type: "Hemorrhage", count: 6 },
  ],
};

router.get('/', (req, res) => {
  res.json(dashboardData);
});

module.exports = router;
