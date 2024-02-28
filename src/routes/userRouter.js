const express = require('express');
const router = express.Router();
const {userController} = require('../controllers/index');

router.post('/register', userController.createUser);

module.exports = router;