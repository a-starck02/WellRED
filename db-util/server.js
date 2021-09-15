const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbconnection = require('./database/connection');
const love = require('./love');
const Book = require('./database/models/bookModel');

dotenv.config();

const app = express();

// Conexão DB
dbconnection();

app.use(cors());

// Middleware de payload da requisição
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor ouvindo no PORT ${PORT}`);
});

// Manipulador de erros
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send({
		status: 500,
		message: err.message,
		body: {}
	});
});

console.log(typeof(love));
console.log(love[0].title);

for(var i in love) {
		let book = new Book({
				id: love[i].id,
					title: love[i].title,
					isbn: love[i].isbn,
					pageCount: love[i].pageCount,
					publishedDate: love[i].publishedDate,
					thumbnailUrl: love[i].thumbnailUrl,
					shortDescription: love[i].shortDescription,
					longDescription: love[i].longDescription,
					status: love[i].status,
					authors: love[i].authors,
					categories: love[i].categories,
				});
			book.save();
		};