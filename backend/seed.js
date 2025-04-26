require('dotenv').config();
const mongoose = require('mongoose');
const Patient = require('./models/Patient');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return seedPatients();
  })
  .catch(err => console.error('DB connection error:', err));

const patients = [
  { name: 'Alice Carter', age: 29, diagnosis: 'Asthma', heartRate: 78, lastCheckup: new Date('2024-09-10') },
  { name: 'Brian Lee', age: 54, diagnosis: 'Hypertension', heartRate: 92, lastCheckup: new Date('2024-10-21') },
  { name: 'Carla Jones', age: 36, diagnosis: 'Diabetes', heartRate: 84, lastCheckup: new Date('2024-12-05') },
  { name: 'David Kim', age: 47, diagnosis: 'Arrhythmia', heartRate: 102, lastCheckup: new Date('2024-08-15') },
  { name: 'Ella Singh', age: 63, diagnosis: 'Coronary Artery Disease', heartRate: 87, lastCheckup: new Date('2024-11-01') },
  { name: 'Frank Nguyen', age: 42, diagnosis: 'Bronchitis', heartRate: 74, lastCheckup: new Date('2024-07-28') },
  { name: 'Gina Patel', age: 33, diagnosis: 'COPD', heartRate: 79, lastCheckup: new Date('2024-06-30') },
  { name: 'Hassan Ali', age: 50, diagnosis: 'Stroke Recovery', heartRate: 85, lastCheckup: new Date('2024-09-03') },
  { name: 'Ivy Chen', age: 38, diagnosis: 'Anemia', heartRate: 76, lastCheckup: new Date('2024-08-18') },
  { name: 'James Smith', age: 45, diagnosis: 'Epilepsy', heartRate: 81, lastCheckup: new Date('2024-05-22') }
];

async function seedPatients() {
  try {
    await Patient.deleteMany(); // clear old data
    await Patient.insertMany(patients);
    console.log('🌱 Seeded sample patients!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding error:', err);
  }
}
