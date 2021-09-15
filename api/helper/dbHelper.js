const constants = require('../constants');
const mongoose = require('mongoose');

module.exports.formatMongoData = (data) => {
	if(Array.isArray(data)) {
		let dataList = [];
		for (value of data) {
			dataList.push(value.toObject());
		}
		return dataList;
	}
	return data.toObject();
};

module.exports.checkObjId = (id) => {
	if(!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(constants.databaseMessage.INVALID_ID);
	}
};