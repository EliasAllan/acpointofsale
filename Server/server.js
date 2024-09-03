const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/userNumbers')
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const userSchema = new mongoose.Schema({
  number: String,
});

const User = mongoose.model('User', userSchema);

app.post('/submit-number', async (req, res) => {
  const { number } = req.body;

  // Create a new user with the submitted number
  const user = new User({ number });
  await user.save(); // Save the number to the database

  res.status(201).send('Number saved to database');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
