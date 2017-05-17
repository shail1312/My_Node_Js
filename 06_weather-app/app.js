const request = require('request');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.address);
//console.log(encodedAddress);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(response, undefined, 2));
  if(error) {
    console.log('Unable to connect to Google server.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to find the address.');
  } else if(body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
  }
});
