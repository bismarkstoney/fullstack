const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('../middleware/asynhandle');
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
	},
	email: {
		type: String,
		required: [true, 'Please add email'],
		unique: [true, 'email is already taken'],
		select: false,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please add a valid email',
		],
	},

	password: {
		type: String,
		required: [true, 'Please add a password'],
	},

	date: {
		type: Date,
		default: Date.now,
	},
});

UserSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.jwtgetSignToken = function () {
	return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

UserSchema.methods.mactchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model('User', UserSchema);
