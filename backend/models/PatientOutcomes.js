// models/PatientOutcomes.js
const mongoose = require('mongoose');

const PatientOutcomesSchema = new mongoose.Schema({
  recoveryRate: Number,
  readmissionRate: Number,
  mortalityRate: Number,
  avgLengthOfStay: Number,
  summary: {
    totalPatients: Number,
    improvedPercent: Number,
    criticalPercent: Number,
  },
  recoveryOverTime: [{ month: String, rate: Number }],
  readmissionCauses: [{ cause: String, count: Number }],
  recentPatients: [
    { name: String, status: String, admitted: String, discharged: String },
  ],
  hospitalIncidents: [{
    type: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }],
});

module.exports = mongoose.model('PatientOutcome', PatientOutcomesSchema);
