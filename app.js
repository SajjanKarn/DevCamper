require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
