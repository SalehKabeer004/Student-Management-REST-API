require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB Atlas from Codespaces!");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
};

module.exports = connectDB;