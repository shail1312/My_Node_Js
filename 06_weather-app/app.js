const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
    //console.log(JSON.stringify(results, undefined, 2));
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherRsults) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        //console.log(JSON.stringify(weatherRsults, undefined, 2));
        console.log(`It's currently ${weatherRsults.temperature}. It feels like ${weatherRsults.apparentTemperature}.`);
      }
    });
  }
});
