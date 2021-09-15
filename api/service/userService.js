// Dependências
const User = require('../database/models/userModel');
const constants = require('../constants');
const {formatMongoData} = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Exportar serviços
module.exports.signup = async ({username, firstName, lastName, phone, password}) => {
	try {
		const user = await User.findOne({phone});
		if(user) {
			throw new Error(constants.userMessage.DUPLICATE_PHONE);
		};

		password = await bcrypt.hash(password, 12);

		const newUser = new User({username, firstName, lastName, phone, password});
		let result = await newUser.save();
		return formatMongoData(result);

	} catch(err) {
		console.log('Erro no serviço: signup', err);
		throw new Error(err);	
	}
};

module.exports.login = async ({username, firstName, lastName, phone, password}) => {
	try {
		const user = await User.findOne({username});
		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		};

		const isValid = await bcrypt.compare(password, user.password);
		if(!isValid) {
			throw new Error(constants.userMessage.INVALID_PASSWORD);
		}

		const token = jwt.sign({id : user.id}, process.env.SECRET_KEY || 'imt-resolve', {expiresIn : '1d'});
		return {token};

	} catch(err) {
		console.log('Erro no serviço: login', err);
		throw new Error(err);	
	}
};

module.exports.edit = async ({token, updateInfo}) => {
	try {
		const id = jwt.verify(token, process.env.SECRET_KEY || 'imt-resolve').id;

		let user = await User.findOneAndUpdate(
			{_id : id},
			updateInfo,
			{new : true}
		);
		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		}
		return formatMongoData(user);
	} catch(err) {
		console.log('Erro no serviço: edit', err);
		throw new Error(err);	
	}
};

module.exports.delete = async ({token, password}) => {
	try {

		const id = jwt.verify(token, process.env.SECRET_KEY || 'imt-resolve').id;
		let user = await User.findById(id);
		if(!user) {
			throw new Error(constants.userMessage.USER_NOT_FOUND);
		};

		const isValid = await bcrypt.compare(password.password, user.password);
		if(!isValid) {
			throw new Error(constants.userMessage.INVALID_PASSWORD);
		};
		
		//user = await User.findByIdAndDelete(id);
		return formatMongoData(user);

	} catch(err) {
		console.log('Erro no serviço: delete', err);
		throw new Error(err);	
	}
};