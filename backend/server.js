// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/healthcare_dashboard';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


app.use('/api/patient-outcomes-dashboard', require('./routes/PatientOutcomes'));



app.get('/', (req, res) => {
  res.send('Healthcare Dashboard Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
