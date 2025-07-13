const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/userController.js');

router.post('/register', registerUser);

module.exports = router;
