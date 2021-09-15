// Dependências
const Joi = require('joi');

// Exportar modelo
module.exports.signup = Joi.object().keys({
	username : Joi.string().required(),
	firstName : Joi.string().required(),
	lastName : Joi.string().required(),
	phone : Joi.string().required(),
	email : Joi.string(),
	password : Joi.string().required(),
	profilePic : Joi.string(),
	ownedBooks : Joi.array(),
	wishlist : Joi.array(),
	friends : Joi.array(),
	messages : Joi.array(),
	unread : Joi.array()
});

module.exports.login = Joi.object().keys({
	username : Joi.string().required(),
	password : Joi.string().required()
});

module.exports.edit = Joi.object().keys({
	username : Joi.string(),
	firstName : Joi.string(),
	lastName : Joi.string(),
	phone : Joi.string(),
	email : Joi.string(),
	password : Joi.string(),
	profilePic : Joi.string(),
	ownedBooks : Joi.array(),
	wishlist : Joi.array(),
	friends : Joi.array(),
	messages : Joi.array(),
	unread : Joi.array()
});

module.exports.delete = Joi.object().keys({
	password : Joi.string().required()
});
