// Dependências
const Book = require('../database/models/bookModel');
const {formatMongoData, checkObjId} = require('../helper/dbHelper');
const constants = require('../constants');

// Exportar serviços

module.exports.addBook = async (serviceData) => {
	try {
		let book = new Book({...serviceData});
		let result = await book.save();
		return formatMongoData(result);
	} catch(err) {
		console.log('Erro no serviço: addBook', err);
		throw new Error(err);	
	}
};

module.exports.getBooks = async ({skip = 0, limit = 10}) => {
	try {
		let books = await Book.find({}).skip(parseInt(skip)).limit(parseInt(limit));
		return formatMongoData(books);
	} catch(err) {
		console.log('Erro no serviço: getBooks', err);
		throw new Error(err);	
	}
};

module.exports.getBookById = async ({id}) => {
	try {
		checkObjId(id);
		let book = await Book.findById(id);
		if(!book) {
			throw new Error(constants.bookMessage.BOOK_NOT_FOUND);
		}
		return formatMongoData(book);
	} catch(err) {
		console.log('Erro no serviço: getBooks', err);
		throw new Error(err);	
	}
};

module.exports.updateBook = async ({id, updateInfo}) => {
	try {
		checkObjId(id);
		let book = await Book.findOneAndUpdate(
			{_id : id},
			updateInfo,
			{new : true}
		);
		if(!book) {
			throw new Error(constants.bookMessage.BOOK_NOT_FOUND);
		}
		return formatMongoData(book);
	} catch(err) {
		console.log('Erro no serviço: updateBook', err);
		throw new Error(err);	
	}
};

module.exports.deleteBook = async ({id}) => {
	try {
		checkObjId(id);
		let book = await Book.findByIdAndDelete(id);
		if(!book) {
			throw new Error(constants.bookMessage.BOOK_NOT_FOUND);
		}
		return formatMongoData(book);
	} catch(err) {
		console.log('Erro no serviço: deleteBook', err);
		throw new Error(err);	
	}
};