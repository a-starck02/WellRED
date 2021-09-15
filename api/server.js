// Dependências
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbconnection = require('./database/connection');

dotenv.config();

const app = express();

// Conexão DB
dbconnection();

app.use(cors());

// Middleware de payload da requisição
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/book', require('./routes/bookRoutes'));	
app.use('/api/user', require('./routes/userRoutes'));

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
})