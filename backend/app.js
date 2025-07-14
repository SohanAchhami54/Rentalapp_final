const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('hello');
});

// Connect to MongoDB and then start server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('mongodb database connected successfully')
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running at the port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error occurred while connecting to the database', err);
  });
