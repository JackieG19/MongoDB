const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe our tests
describe('Updating records', function(){
  var char;
  
  // Add a character to the db before each tests
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Updates the name of a record', function(done){
      // this going out and update this record with the name mario to have the name of luigi
      MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
          // goes out to find the id in the record
          MarioChar.findOne({_id: char._id}).then(function(result){
              assert(result.name === 'Luigi');
              done();
          });
      });
  });
  
  it('Adds 1 to the weight of every record', function(done){
    
    // the model.update function({empty object thats gonna return every record}, 
    // {update operator which means increment{pass in an object of weight and add by 1}})
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function(){
        
        // check if line 35 is working that Mario's weight is incremented by 1
        MarioChar.findOne({name: 'Mario'}).then(function(record){
            
            assert(record.weight === 51);
            
            done();
        });
    });
 });


});

// update operator is just something that can help upadte a field or properties in certain ways
