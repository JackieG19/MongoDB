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
before(function(done){
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

