// @desc    Fetches all the bootcamps.
// @route   GET /api/v1/bootcamps
// @access  PUBLIC
exports.getBootcamps = async (req, res) => {
  return res.status(200).json({ success: true, msg: "hello world" });
};

// @desc    Fetches a single bootcamps.
// @route   GET /api/v1/bootcamp/:id
// @access  PUBLIC
exports.getBootcamp = async (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `bootcamp: ${req.params.id}` });
};

// @desc    Creates a new single bootcamp.
// @route   POST /api/v1/bootcamps
// @access  PRIVATE
exports.createBootcamp = async (req, res) => {
  return res.status(201).json({ success: true, msg: "bootcamp created" });
};

// @desc    Updates a single bootcamp.
// @route   PUT /api/v1/bootcamps/:id
// @access  PRIVATE
exports.updateBootcamp = async (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `bootcamp of id ${req.params.id} updated` });
};

// @desc    Deletes a single bootcamp.
// @route   DELETE /api/v1/bootcamps/:id
// @access  PRIVATE
exports.deleteBootcamp = async (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `deleted bootcamp of id ${req.params.id}` });
};
