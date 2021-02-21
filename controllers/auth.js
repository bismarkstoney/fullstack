const asyncHandler = require('../middleware/asynhandle');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorHandle');

//@route POST /api/v1/users
//@dsce  login a user
//@access private

exports.loginUser = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return next(new ErrorResponse('please enter a email and password', 404));
	}

	//CHECK FOR USER
	let user = await User.findOne({ email }).select('+password');
	if (!user) {
		return next(new ErrorResponse('Invalid credientials', 401));
	}

	//match  user password  to hash passwor
	const isMatch = user.mactchPassword();
	if (!isMatch) {
		return next(new ErrorResponse('Invalid credientials', 401));
	}
	//get the token'
	const token = user.jwtgetSignToken();
	//console.log(req.body);
	res.status(200).json({
		message: 'login',
		token,
	});
});

//@route GET /api/v1/users
//@dsce  Get login user
//@access private
exports.getLoginUser = (req, res, next) => {
	res.status(200).json({
		message: 'Login uuser',
	});
};
