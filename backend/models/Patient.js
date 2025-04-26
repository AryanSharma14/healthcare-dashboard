const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  diagnosis: String,
  heartRate: Number,
  lastCheckup: Date
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
