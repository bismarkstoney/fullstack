const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { registerUser } = require('../controllers/users');

router
	.route('/register', [check('name', 'Name isis').not().isEmpty()])
	.post(registerUser);

module.exports = router;
