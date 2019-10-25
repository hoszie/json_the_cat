const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body);
    console.log(data);
    if (data.length > 0) {
      let desc = (data[0].description);
      callback(error, desc);
    } else {
      callback(true, null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};