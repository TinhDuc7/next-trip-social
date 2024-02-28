const User = require('../models/userModel');
const {authMiddleware, handlePassword} = require('../middlewares/index')

const createUser = async (req, res) => {
    try {
        const { username, email, location, password } = req.body;
        
        const encryptedPassword = handlePassword.encryptPassword(password);

        const newUser = new User({ username, email, location, password: encryptedPassword })
        await newUser.save();

        res.status(201).json({message: 'User created successfully '})
    } catch (error) {
        res.status(500).json({message:'Error: ', error})
    }
}

// const createUser = async (req, res) => {
//     try {
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             location: req.body.location,
//             password: req.body.password,
//         })
//         await newUser.save();
//         res.status(201).json({message: 'User created successfuly'})
//     } catch (error) {
//         res.status(500).json({message: 'Error: ', error})
//     }
// }

const getUser = async (req, res) => {
    
}


module.exports = {
    createUser,
}