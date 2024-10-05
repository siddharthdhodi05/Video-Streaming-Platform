import express from 'express';
import connectToDatabase from "../db/index.js";
  // Use relative path to import db.js

const app = express();

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define your port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
