
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Premium Watch Store!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully!');
    })
    .catch((err) => {
        console.log('Database Connection Error:', err.message);
    });

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
