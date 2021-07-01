const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.log(err.stack.red);

  if (error.name === "CastError") {
    message = `Resource not found with id of ${error.value}`;
    error = ErrorResponse(message, 404);
  }

  if (error.name === "ValidationError") {
    const message = Object.keys(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Something went wrong...",
  });
};

module.exports = errorHandler;
