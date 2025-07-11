const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the URI from .env
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// A simple test route
app.get('/', (req, res) => {
  res.send('Journmate backend is running');
});

// Use PORT from .env or fallback to 5000
const PORT = process.env.PORT || 5000;
const destinationsRouter = require('./routes/destinations');
app.use('/api/destinations', destinationsRouter);
console.log('✅ Destinations route mounted');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
