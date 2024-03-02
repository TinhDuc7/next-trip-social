const express = require('express');
const userRouter = require('./userRouter');
const userNoAuth = require('./userNoAuth');
const {authMiddleware} = require('../middlewares')

const router = express.Router();
const auth = authMiddleware.verifyToken;

// router.use('/auth', auth, userRouter);

router.use('/user', userNoAuth);


module.exports = router;