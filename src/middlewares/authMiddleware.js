const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_PRIVATE_KEY;


const signToken = (user) => {
    const token = jwt.sign({ id: user.id }, jwtKey, {expiresIn: '7d'});
    console.log(token)
    return token
}

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        if (token) {
            const decoded = jwt.verify(token, jwtKey);
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

module.exports = {
    verifyToken,
    signToken,
};