//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request
//  https://api.thecatapi.com/v1/breeds/search?q=<insertbreed>

const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  // console.log(url);

  request(url, (error, response, body) => {
    // console.log('this is the body:', body);
    // console.log('this is the body length:', JSON.parse(body).length);

    // call the callback with either an error if there's a error or null if there isn't, for the first argument
    if (error) {
      callback(`Failed: ${error}`, null);
    }
    //JSON.parse to convert the JSON string into an actual object.
    const data = JSON.parse(body);
    const breedD = data[0];

    // if there's an error return error, and description is null
    if (data.length === 0) {
      callback(`Meeeeoooow! Unable to find: ${breed}!`, null);

    // if there's no error return null, and return description
    } else {
      callback(null, breedD.description);
    }
  });
};

module.exports = { fetchBreedDescription };
