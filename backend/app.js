import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// ⚠️⚠️⚠️ Note ⚠️⚠️⚠️
// If you're a developer viewing this code in my repository, please make sure to create your own .env file with the necessary environment variables as it is not provided in this repository.

// env variables configuration
dotenv.config();

// App Configuration
const PORT = process.env.PORT || 3000;
const app = express();

// Start Server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}!`);
    });
  } catch (error) {
    console.log(`Error in starting the server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
