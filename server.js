// server.js
const express = require('express');
const cors = require('cors'); // ✅ Import
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// ✅ Enable CORS so frontend can access backend
app.use(cors({
  origin: 'http://localhost:3000', // Allow only your React app
  credentials: true
}));

// Parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/dishes', require('./routes/dishRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});