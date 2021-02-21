const asyncHandler = require('../middleware/asynhandle');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandle');
//@route POST /api/v1/users
//@dsce  Register a user
//@access Public

exports.registerUser = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	const user = await User.create({ name, email, password });
	//get the token'
	const token = user.jwtgetSignToken();
	//console.log(req.body);
	res.status(200).json({
		message: 'Register',
		token,
	});
});
