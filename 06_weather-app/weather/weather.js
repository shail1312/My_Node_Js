const request = require('request');

var getWeather = (latitude, longitude , callback) => {

  request({
    url:`https://api.darksky.net/forecast/de19258c7e48a67d69ac5d955b103f1d/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect weather api.');
    }
    else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if(response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary,
      });
    }
  });
};

module.exports.getWeather = getWeather;
