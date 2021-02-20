const User = require('../models/User');
const { check, validationResult } = require('express-validator');
//@route POST /api/v1/users
//@dsce  Register a user
//@access Public

exports.registerUser = (req, res, next) => {
	console.log(req.body);
	res.status(200).json({
		message: 'Register',
	});
};
