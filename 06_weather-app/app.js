const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
.options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Adderss to fatch weather for',
      string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

var getTemperature = () => {
  request({
    url:`https://api.darksky.net/forecast/de19258c7e48a67d69ac5d955b103f1d/21.2634837,81.61720830000002`,
    json: true
  }, (error, response, body) => {
    if(error){
      console.log('Unable to connect weather api.');
    }
    else if (response.statusCode === 400) {
      console.log('Unable to fetch weather.');
    } else if(response.statusCode === 200){
      console.log('temperature'+body.currently.temperature);
    }
  });
};
getTemperature();

//de19258c7e48a67d69ac5d955b103f1d
