const express = require('express');
const router = express.Router();

// NOTE: singular "controller"
const userController = require('../controller/userController');

router.post('/register', userController.registerUser);
// router.post('/login', userController.loginUser); // add when ready

// Login
router.post('/login', userController.loginUser);


module.exports = router;
