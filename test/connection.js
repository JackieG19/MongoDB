const mongoose = require('mongoose');

// implement the default ES6 Promises library
mongoose.Promise = global.Promise;

// nothing is telling mongo to wait until we actually established connection before it goes 
    // mongoose.connect('mongodb://localhost/testroot');
    
    // mongoose.connection.once('open', function(){
    //     console.log('Connection has been made, now make fireworks...');
    // }).on('error', function(error){
    //     console.log('Connection error:', error);
    // });

// To sort this out by using a hook in mochawhich is a function that tells mocha to 
// run this section of code either before runnong a test of after you run a test.

// Connect to db before tests run
before(function(done){ // this only runs once.
// tells mocha to wait until the connection has been made before you start running those test.
    
    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testroot');
    
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });
    
});


// Drop(delete) the characters collection before each test

// beforeEach hook which meand it will tell mocha to run this 
// code inside here before every single test not just once.
beforeEach(function(done){ 
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
    // ^this reference all the collection in the db.the MarioChar collection plural.delete(
    // callback function(// tell mocha that we've dropped the collection and now we can perform the test))
    // the callback function when it drops the database then we do something.
        
        done(); // now you can run the test
    });
});