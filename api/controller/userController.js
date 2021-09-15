// Dependências
const constants = require('../constants');
const userService = require('../service/userService');

// Exportar controladores de requisição
module.exports.signup = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await userService.signup(req.body);
		response.status = 200;
		response.message = constants.userMessage.SIGNUP_SUCCESS;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: signup', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.login = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await userService.login(req.body);
		response.status = 200;
		response.message = constants.userMessage.LOGIN_SUCCESS;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: login', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.edit = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await userService.edit({
			token : req.headers.authorization.split('Bearer')[1].trim(),
			updateInfo : req.body
		});
		response.status = 200;
		response.message = constants.userMessage.EDIT_SUCCESS;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: edit', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};

module.exports.delete = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const serviceResponse = await userService.delete({
			token : req.headers.authorization.split('Bearer')[1].trim(),
			password : req.body
		});
		response.status = 200;
		response.message = constants.userMessage.DELETE_SUCCESS;
		response.body = serviceResponse;
	} catch(err) {
		console.log('Erro no controlador: delete', err);
		response.status = 400;
		response.message = err.message;
		response.body = {};
	}
	return res.status(response.status).send(response);
};