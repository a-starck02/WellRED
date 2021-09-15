// Dependências
const bookService = require('../service/bookService');
const constants = require('../constants');

// Exportar controladores

module.exports.addBook = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await bookService.addBook(req.body);
		response.status = 200;
		response.message = constants.bookMessage.BOOK_ADDED;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: addBook', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.getBooks = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await bookService.getBooks(req.query);
		response.status = 200;
		response.message = constants.bookMessage.BOOK_FETCHED;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: getBooks', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.getBookById = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await bookService.getBookById(req.params);
		response.status = 200;
		response.message = constants.bookMessage.BOOK_FETCHED;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: getBooks', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.updateBook = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await bookService.updateBook({
			id : req.params.id,
			updateInfo : req.body
		});
		response.status = 200;
		response.message = constants.bookMessage.BOOK_UPDATED;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: updateBook', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.deleteBook = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await bookService.deleteBook(req.params);
		response.status = 200;
		response.message = constants.bookMessage.BOOK_DELETED;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: deleteBook', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};