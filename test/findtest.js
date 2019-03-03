const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Finding records', function(){
  var char;
  
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
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
      
      // found the result/found the record(represent the object that it returns to us which has a property of name)
      assert(result.name === 'Mario'); 
      // if this result has a name property of Mario he this ahd successfully gone out 
      // and found one record with the name mario

      done();
    });
  });
  
    // creating a new block
    it('Finds a record by unique id', function(done){
        
        // finding one record with ID of char
        MarioChar.findOne({_id: char._id}).then(function(result){
            
            // assert that the ID found is equal to the ID
            // assert(result._id === char._id);
            // this failed because the ids are objects not string
            // this comparing two object, one is a local object and the other comes from the db
            
            // when using assert need to call toString on the id to get the actual string of the object
            assert(result._id.toString() === char._id.toString());
        
        done();
    });
  });

});

// **NOTE:**
// When finding a character, don't have to put toString because mongoose 
// understands that we want the to find a record with the same ID 