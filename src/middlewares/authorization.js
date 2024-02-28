const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

const authMiddleware = (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(' ')[1]
        if (token) {
            const decoded = jwt.verify(token, privateKey);
            console.log('Decoded: ', decoded);
            console.log('Login token:', token);
            req.user = decoded;
            next();
        }
    } catch (error) {
        res.status(400).json({
            msg: "Invalid token",
            error: error
        })
    }
}

module.exports = {authMiddleware};