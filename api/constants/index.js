module.exports = {
	defaultServerResponse : {
		status : 400,
		message : '',
		body : {}
	},
	bookMessage : {
		BOOK_ADDED : "Livro adicionado com sucesso",
		BOOK_FETCHED : 'Livro retornado com sucesso',
		BOOK_NOT_FOUND : 'Livro não encontrado',
		BOOK_UPDATED : 'Livro atualizado com sucesso',
		BOOK_DELETED : 'Livro deletado com sucesso'
	},
	userMessage : {
		SIGNUP_SUCCESS : 'Registrado com succeso',
		LOGIN_SUCCESS : 'Entrou com succeso',
		EDIT_SUCCESS : 'Informações alteradas com sucesso',
		DELETE_SUCCESS : 'Usuário deletado',
		DUPLICATE_PHONE : 'Número de telefone já registrado',
		USER_NOT_FOUND : 'Usuário não encontrado',
		INVALID_PASSWORD : 'Senha incorreta'
	},
	requestValidationMessage : {
		BAD_REQUEST : "Campos inválidos",
		TOKEN_MISSING : 'Token de validação não presente'
	},
	databaseMessage : {
		INVALID_ID : "ID inválido"
	}
};