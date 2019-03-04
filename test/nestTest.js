const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/authors');

// Describe our tests
describe('Nesting records', function(){

    beforeEach(function(done){
        // Drop the collection
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

    // Create tests
    it('Creates an author with sub-documents', function(done){

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });
        
        // saving to the db
        pat.save().then(function(){
            
            // goes out and find the author and makes sure its save to the db
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                
                // the record that we found is equal to 1 of that array
                assert(record.books.length === 1);
                
                done();
            });
        });

    });

    it('Adds a book to an author', function(done){

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: 'Name of the Wind', pages: 400}]
        });
        
        // save to the db
        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                
                // add a book to the books collection
                record.books.push({title: "Wise Man's Fear", pages: 500});
                // the book array.pushing a new book on to the array({passing in a new property})
                
                // refered recored returned to us.gonna save this record back into the db with the new book added in
                record.save().then(function(){
                    
                    // when this book has successfully been saved...
                    // go out and find the book again so it returns and makes sure it has the book
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                        
                        // makes sure this record has 2 books
                        assert(record.books.length === 2);
                        
                        done();
                    });
                });
            });
        });

    });

});