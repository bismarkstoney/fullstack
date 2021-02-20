//@route POST /api/v1/users
//@dsce  Register a user
//@access Public

exports.registerUser = (req, res, next) => {
	res.status(200).json({
		message: 'Register',
	});
};
