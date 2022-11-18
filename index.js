const { fetchBreedDescription } = require('./breedFetcher');

// > node breedFetcher.js Chartreux
const breed = process.argv[2];//provided in command line
// console.log(breed);


fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(description);
  }
});

