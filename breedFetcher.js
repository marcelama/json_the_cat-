const request = require('request');

//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request
//  https://api.thecatapi.com/v1/breeds/search?q=<insertbreed>

// > node breedFetcher.js Chartreux
const breed = process.argv[2];//provided in command line
// console.log(breed);
const url = 'https://api.thecatapih.com/v1/breeds/search?q=' + breed;
// console.log(url);

request(url, (error, response, body) => {
  // console.log('this is the body:', body);
  // console.log('this is the body length:', JSON.parse(body).length);
  // Print the error if one occurred
  if (error) {
    throw Error('Error!!!');
  } else if (JSON.parse(body).length === 0) {
    console.log(`Meeeeoooow! ${breed} not found!`);
  } else {
  //JSON.parse to convert the JSON string into an actual object.
    const data = JSON.parse(body);
    console.log(data[0]);
  }
});


