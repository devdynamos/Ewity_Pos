// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB (replace 'your-mongodb-url' with your actual MongoDB URL)
const mongoDBURL = 'mongodb+srv://admin:hamza-333@cluster0.wn9iaqq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  email: String,
  password: String,
});

app.use(cors());
app.use(express.json());

// Handle login form data
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Error during login' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
