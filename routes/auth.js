const express = require('express');
const router = express.Router();
const { loginUser, getLoginUser } = require('../controllers/auth');

router.route('/login').post(loginUser);
router.route('/:id').get(getLoginUser);

module.exports = router;
