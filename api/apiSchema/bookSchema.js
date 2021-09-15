// Dependências
const Joi = require('joi');

// Exportar modelo
module.exports.createBookSchema = Joi.object().keys({
	id : Joi.number(),
	title: Joi.string().required(),
	isbn : Joi.string().required(),
	pageCount : Joi.number(),
	publishedDate : Joi.object(),
	thumbnailUrl : Joi.string().required(),
	shortDescription : Joi.string().required(),
	longDescription : Joi.string(),
	status : Joi.string(),
	authors : Joi.array().required(),
	categories : Joi.array().required()
});

// Exportar modelos query
module.exports.getBooksSchema = Joi.object().keys({
	skip : Joi.string(),
	limit: Joi.string()
});

module.exports.updateBookSchema = Joi.object().keys({
	id : Joi.number(),
	title: Joi.string(),
	isbn : Joi.string(),
	pageCount : Joi.number(),
	publishedDate : Joi.object(),
	thumbnailUrl : Joi.string(),
	shortDescription : Joi.string(),
	longDescription : Joi.string(),
	status : Joi.string(),
	authors : Joi.array(),
	categories : Joi.array()
});