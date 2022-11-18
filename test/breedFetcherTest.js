const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      //compare error
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error with a null description', (done) => {
    fetchBreedDescription('CattyCat', (err, description) => {
      
      //compare error
      const expectedErr = 'Meeeeoooow! Unable to find: CattyCat!';
      assert.equal(err, expectedErr);
  
      // compare description
      assert.equal(description, null);
  
      done();
    });
  });
});


