const mongoose = require('mongoose');

const recoveryTrendSchema = new mongoose.Schema({
  month: String,
  rate: Number,
});

const recentPatientSchema = new mongoose.Schema({
  name: String,
  status: String,
});

const dashboardSchema = new mongoose.Schema({
  recoveryRate: Number,
  readmissionRate: Number,
  mortalityRate: Number,
  avgLengthOfStay: Number,
  totalPatients: Number,
  improvedPercent: Number,
  criticalPercent: Number,
  recoveryTrend: [recoveryTrendSchema],
  recentPatients: [recentPatientSchema],
}, { timestamps: true });

module.exports = mongoose.model('PatientOutcomeDashboard', dashboardSchema);
