const NodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  apiKey: process.env.GEOCODER_APIKEY,
  httpAdapter: "https",
  formatter: null,
};

const geoCoder = NodeGeocoder(options);

module.exports = geoCoder;
