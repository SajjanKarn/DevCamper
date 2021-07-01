const Bootcamp = require("../models/Bootcamp");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/async");

// @desc    Fetches all the bootcamps.
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  return res
    .status(200)
    .json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc    Fetches a single bootcamps.
// @route   GET /api/v1/bootcamp/:id
// @access  PUBLIC
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findOne({ _id: req.params.id });

  if (!bootcamp)
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );

  return res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Creates a new single bootcamp.
// @route   POST /api/v1/bootcamps
// @access  PRIVATE
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  return res.status(201).json({ success: true, data: bootcamp });
});

// @desc    Updates a single bootcamp.
// @route   PUT /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp)
    return res.status(400).json({
      success: false,
      message: `Resource id: ${req.params.id} not found.`,
    });

  return res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Deletes a single bootcamp.
// @route   DELETE /api/v1/bootcamps/:id
// @access  PRIVATE
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp)
    return res.status(400).json({
      success: false,
      message: `Resource with id: ${req.params.id} not found.`,
    });

  return res.status(200).json({ success: true, data: {} });
});
