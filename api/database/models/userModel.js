// Dependências
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username : String,
	firstName : String,
	lastName : String,
	phone : String,
	email : String,
	password : String,
	profilePic : String,
	ownedBooks : Array,
	wishlist : Array,
	friends : Array,
	messages : Array,
	unread : Array
}, 	{
	toObject : {
		transform : function(doc, ret, options) {
			ret.id = ret._id;
			delete ret._id;
			delete ret.password;
			delete ret.__v;
			return ret;
		}
	}
});

module.exports = mongoose.model('User', userSchema);