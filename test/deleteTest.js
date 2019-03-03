const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Deleting records', function(){
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
  it('Deletes a record from the database', function(done){
      
    // this is going out to find the record in the database in the collection and its gonna remove it
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
      
      // making sure that it has been removed by attempting to find this record which has been removed ^
      MarioChar.findOne({name: 'Mario'}).then(function(result){
        
        // if it doesn't find the record it will return null
        assert(result === null);
        
        done();
      });
    });
  });

});