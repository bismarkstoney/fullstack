//@route POST /api/v1/users
//@dsce  login a user
//@access private

exports.loginUser = (req, res, next) => {
	res.status(200).json({
		message: 'Login',
	});
};

//@route GET /api/v1/users
//@dsce  Get login user
//@access private
exports.getLoginUser = (req, res, next) => {
	res.status(200).json({
		message: 'Login uuser',
	});
};
