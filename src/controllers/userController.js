const User = require('../models/userModel');
const { authMiddleware, handlePassword } = require('../middlewares/index');

const createUser = async (req, res) => {
  try {
    const { username, email, location, password } = req.body;

    const encryptedPassword = handlePassword.encryptPassword(password);

    const newUser = new User({
      username,
      email,
      location,
      password: encryptedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully ' });
  } catch (error) {
    res.status(500).json({ message: 'Error: ', error });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json('Invalid credentials');
    }
    const checkPassword = handlePassword.comparePasswords(
      password,
      user.password
    );
    if (!checkPassword) {
      return res.status(401).json('Invalid credentials');
    }
    // res.status(200).json({ message: 'Login Successfully' })

    if (user) {
        const token = authMiddleware.signToken(user);
        res.status(200).json({ message: 'Login Successfully', token });
    }
    console.log('User Data: ', user);
    // console.log('User Data: ', user.id);
  } catch (error) {
    res.status(500).json({ message: 'Login Failure!: ', error });
  }
};

module.exports = {
  createUser,
  loginUser,
};
