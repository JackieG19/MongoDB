const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    books: [BookSchema] // this is an array of book schema object
});

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;