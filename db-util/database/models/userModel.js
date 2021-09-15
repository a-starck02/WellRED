const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	firstName : String,
	lastName : String,
	phone : String,
	email : String,
	hashedPassword : String,
	profilePic : String
	ownedBooks : Array,
	wishlist : Array,
	friends : Array,
	messages : Array,
	unread : Array
});

module.exports = mongoose.model('Book', bookSchema);