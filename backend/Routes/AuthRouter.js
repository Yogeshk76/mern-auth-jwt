const express = require('express');
const { signupValidation } = require('../Middlewares/AuthValidation');
const router = express.Router();
const { signup } = require('../Controllers/AuthController');
const { login } = require('../Controllers/AuthController');
const { loginValidation } = require('../Middlewares/AuthValidation');


router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;
