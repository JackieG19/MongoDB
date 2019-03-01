// creating a new model for Mario characters for this example
// and create a Schema for each record based on this model
// telling the mongo database how each of these record in the collection should look like using the schema 

const mongoose = require('mongoose');

// using this property/object to create the Mario charaters 
const Schema = mongoose.Schema;

// Create a Schema and a Model
const MarioCharSchema = new Schema({ // new Schema is refering to line 8
   // passing in an object
    name: String, // expect an "word"
    weight: Number // expect a number
});

// creating a new model(collection name, refers to line 11)
const MarioChar = mongoose.model('mariochar', MarioCharSchema);
// everytime this will create a new Mario charcter in the collection and base it on the schema


module.exports = MarioChar; // to use in other files