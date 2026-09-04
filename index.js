require('dotenv').config();

const express = require('express');
const app = express()
const port = 3000

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB Atlas from Codespaces!");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/students', (req, res) => {
  res.json()
})

app.get('/api/students', (req, res) => {
  res.json()
})

app.get('/api/students/:id', (req, res) => {
  res.json()
})

app.put('/api/students/:id', (req, res) => {
  res.json()
})

app.delete('/api/students/:id', (req, res) => {
  res.json()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})