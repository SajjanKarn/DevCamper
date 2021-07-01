require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/db");

const errorHandler = require("./middlewares/error");

const app = express();

// database connection.
connectDB();

// some middlewares.
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes
app.use("/api/v1/bootcamps", require("./routes/bootcamps"));

// error handler.
app.use(errorHandler);

// server config.
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});

// handling promise rejection. and shutting down the server.
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
