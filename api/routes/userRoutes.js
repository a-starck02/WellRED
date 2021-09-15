// Dependências
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const tokenValidation = require('../middleware/tokenValidation');
const userSchema = require('../apiSchema/userSchema');

router.post('/signup',
	joiSchemaValidation.validateBody(userSchema.signup), 
	userController.signup
);

router.post('/login',
	joiSchemaValidation.validateBody(userSchema.login),
	userController.login
);

router.put('/edit',
	tokenValidation.validateToken,
	joiSchemaValidation.validateBody(userSchema.edit),
	userController.edit
);

router.delete('/delete',
	tokenValidation.validateToken,
	joiSchemaValidation.validateBody(userSchema.delete),
	userController.delete
);

// Exportar o objeto roteador
module.exports = router;