const request = require("request");

const geocode = (location, callback) => {
  if (!location) {
    callback("Please provide a location!", undefined);
  }
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibWFuaXNoLW1hcGJveCIsImEiOiJja2t3ZjdsM2oxY2tjMndtc3M0bGZkbGYzIn0.YCoGf9hMBebc4jdhslH6nw&limit=1`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Invalid location. Please provide a valid location.", undefined);
    } else {
      const longitude = response.body.features[0].center[0];
      const latitude = response.body.features[0].center[1];
      const placeName = response.body.features[0].place_name;
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        placeName: placeName,
      });
    }
  });
};

module.exports = geocode;
