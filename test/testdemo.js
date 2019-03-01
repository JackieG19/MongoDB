const mocha = require('mocha');
const assert = require('assert');

// the way mocha works is that you have to describe what the test is about

// Describe the tests(a string that describe the test, and a function)
describe('testing mocha', function(){

  // Create tests
  // the it block is going to describe a single test
  it('adds numbers that equal to 5', function(){
    assert(2 + 3 === 5);
    // predict the result()
  });

});


// use npm run test to check if the test pass