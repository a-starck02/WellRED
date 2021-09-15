const mongoose = require('mongoose');

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
		console.log('Conectado com o banco de dados');
	} catch(err) {
		console.log('Erro na conexão com o banco de dados', err);
		throw new Error(err);
	}
}