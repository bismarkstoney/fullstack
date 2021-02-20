//@route POST /api/v1/contacts
//@dsce  create a new contact
//@access private

exports.createContact = (req, res, next) => {
	res.status(200).json({
		message: 'contact created',
	});
};

//@route GET /api/v1/contacts/:id
//@dsce  get a single  contact
//@access Public

exports.getContact = (req, res, next) => {
	res.status(200).json({
		message: 'contact',
	});
};

//@route GET /api/v1/contacts
//@dsce  get all  contact
//@access Private

exports.getContacts = (req, res, next) => {
	res.status(200).json({
		message: 'all contacta',
	});
};

//@route PUT /api/v1/contacts/:id
//@dsce  update a contact
//@access private

exports.updateContact = (req, res, next) => {
	res.status(200).json({
		message: 'updated',
	});
};

//@route DELETE /api/v1/contacts/:id
//@dsce  delete a contact
//@access private

exports.deleteContact = (req, res, next) => {
	res.status(200).json({
		message: 'deleted',
	});
};
