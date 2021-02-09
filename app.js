const request = require("request");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

geocode("Delhi", (error, geocodeData) => {
  if (error) {
    return console.log(error);
  }

  forecast(
    geocodeData.latitude,
    geocodeData.longitude,
    (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      
      console.log(geocodeData.placeName);
      console.log(forecastData);
    }
  );
});
