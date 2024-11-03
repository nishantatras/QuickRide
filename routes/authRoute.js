const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
  try {
    //const {username, email, password, phone, userType, gender, kyc_status} =
    //  req.body;
    const {username, email, password} = req.body;
    const existingUser = await User.findOne({email});

    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    //const user = new User({
    //  username,
    //  email,
    //  password,
    //  phone,
    //  userType,
    //  gender,
    //  kyc_status,
    //});
    const user = new User({username, email, password});
    await user.save();
  } catch (error) {
    res.status(500).json({message: 'Error registering user', error});
  }
});

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
      return res.status(400).json({message: 'Invalid credentials'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({message: 'Invalid credentials'});
    }

    const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: '1h'});
    res.json({message: 'Login successful', token});
  } catch (error) {
    res.status(500).json({message: 'Error logging in', error});
  }
});

module.exports = router;
