const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){

  // Add a character to the db before each tests
  beforeEach(function(done){
    var char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', function(done){
    
    // model.going out to find the record from the db using it on the model itself.({search by name})
    // /then(function(result that is finds, what is comes back with the record))
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      
      // found the result, found the record
      // (represent the object that it returns to us which has a property of name)
      assert(result.name === 'Mario'); 
      // if this result has a name property of Mario he this ahd successfully gone out 
      // and found one record with the name mario

      done();
    });

  });

});