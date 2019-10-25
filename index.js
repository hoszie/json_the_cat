const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const logData = (error, description) => {
  console.log("Error: ", error);
  console.log(description);
};

fetchBreedDescription(breedName, logData);