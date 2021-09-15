// Dependências
const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');	
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const bookSchema = require('../apiSchema/bookSchema');
const tokenValidation = require('../middleware/tokenValidation');

// Rotear requisições
router.post('/',
	tokenValidation.validateToken, 
	joiSchemaValidation.validateBody(bookSchema.createBookSchema), 
	bookController.addBook
);

router.get('/', 
	tokenValidation.validateToken,
	joiSchemaValidation.validateQueryParams(bookSchema.getBooksSchema),
	bookController.getBooks
);

router.get('/:id',
	tokenValidation.validateToken, 
	bookController.getBookById
);

router.put('/:id',
	tokenValidation.validateToken,
	joiSchemaValidation.validateBody(bookSchema.updateBookSchema),
	bookController.updateBook
);

router.delete('/:id',
	tokenValidation.validateToken,
	bookController.deleteBook
);

// Exportar roteador
module.exports = router;