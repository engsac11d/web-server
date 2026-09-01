const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=32005c6266fe46a2d71b30ea47c3eb25&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (response.body.error) {
      callback("Unable to find location!");
    } else {
      const { temperature, feelslike, weather_descriptions } =
        response.body.current;
      callback(
        undefined,
        weather_descriptions[0] +
          ". It is currently " +
          temperature +
          " degrees out. It feels like " +
          feelslike +
          " degrees out.",
      );
    }
  });
};

module.exports = forecast;
