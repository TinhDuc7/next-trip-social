const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index');

router.post('/login', userController.loginUser);
router.post('/register', userController.createUser);

module.exports = router;