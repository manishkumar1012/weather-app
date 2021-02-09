const request = require("request");
const forecast = require("./utils/forecast");

// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFuaXNoLW1hcGJveCIsImEiOiJja2t3ZjdsM2oxY2tjMndtc3M0bGZkbGYzIn0.YCoGf9hMBebc4jdhslH6nw&limit=1";
// request({ url: url, json: true }, (error, response) => {
//   console.log(response.body);
//   const long = response.body.features[0].center[0];
//   const lat = response.body.features[0].center[1];
//   console.log(`long: ${long}, lat: ${lat}`);
// });

forecast(77.1025, 28.7041, (error, data) => {
  console.log(`Error`, error);
  console.log('Data', data);
});
