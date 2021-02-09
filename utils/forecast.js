const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c84cb1d1ffdca2a5e9eaba412de6051d&query=${latitude},${longitude}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to forecast services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location specified!", undefined);
    } else {
      const currentData = response.body.current;
      const temperature = currentData.temperature;
      const feelsLike = currentData.feelslike;
      const weatherDescription = currentData.weather_descriptions[0];
      const responseMessage = `${weatherDescription}. It is currently ${temperature} degrees out there. There is a ${feelsLike}% chance of rain.`;
      callback(undefined, responseMessage);
    }
  });
};

module.exports = forecast;
