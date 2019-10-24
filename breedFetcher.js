const request = require('request');
const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, function(error, response, body) {
  console.log("Error: ", error);
  const data = JSON.parse(body);
  console.log(data);
  if (data.length > 0) {
    console.log(data[0].description);
  }
});


