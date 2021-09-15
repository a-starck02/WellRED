// Dependências
const constants = require('../constants');
const jwt = require('jsonwebtoken');

// Exportar função de validação
module.exports.validateToken = (req, res, next) => {
	let response = {...constants.defaultServerResponse};
	try {
		if(!req.headers.authorization) {
			throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
		}

		const token = req.headers.authorization.split('Bearer')[1].trim();
		const decoded = jwt.verify(token, process.env.SECRET_KEY || 'imt-resolve');

		return next();

	} catch(err) {
		console.log('Error: ', err);
		response.message = err.message;
		response.status = 401;
	}
	
	return res.status(response.status).send(response);
}