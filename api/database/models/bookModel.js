// Dependências
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
}, {
	toObject : {
		transform : function(doc, ret, options) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.__v;
			return ret;
		}
	}
});

module.exports = mongoose.model('Book', bookSchema);