const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://geocode.maps.co/search?q=" +
    address +
    "&api_key=6a28736d68f09737440014syh070a58";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (response.body.length === 0) {
      callback("Unable to find location. Try another search!");
    } else {
      const { lat, lon, display_name } = response.body[0];
      callback(undefined, {
        latitude: lat,
        longitude: lon,
        location: display_name,
      });
    }
  });
};

module.exports = geocode;
