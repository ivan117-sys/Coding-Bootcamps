const NodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  // formatter: null,
  apiKey: "THtiW0mLACsF3PM2bDeElPGsj6rsTpkH",
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
