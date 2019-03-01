const assert = require('assert');
const MarioChar = require('../models/mariochar'); 
 

// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){
    
    // cretaing a new Mario character
    var char = new MarioChar({
        name: 'Mario'  // passing in an object
    }); // locally
    
    // save method is a asynchronous request in the mongoose saves the model(new chararcter) to the database
    // then method waits for the first request(save) to complete first then fire off the function
    char.save().then(function(){
      assert(char.isNew === false); 
      //.isNew property is gonna return true when created this character locally and been saved to the db
      // or false if its not new character and has not been save to the db
      
      done();  // telling the mocha the test is done and go on to the next
    });

  });
  // next test
});