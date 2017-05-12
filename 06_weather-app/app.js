const request = require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=%20fafadih%20raipur',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(response, undefined, 2));
});
