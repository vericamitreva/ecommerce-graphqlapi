const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const graphqlRoutes = require('./routes/graphql');

const app = express();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully');

  app.use(express.json()); 

  app.use(graphqlRoutes);

  app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce API!');
  });  

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
