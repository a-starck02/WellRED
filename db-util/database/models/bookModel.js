const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	id : Number,
	title : String,
	isbn : String,
	pageCount : Number,
	publishedDate : Object,
	thumbnailUrl : String,
	shortDescription : String,
	longDescription : String,
	status : String,
	authors : Array,
	categories : Array
});

module.exports = mongoose.model('Book', bookSchema);