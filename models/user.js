const mongoose = require('mongoose');
//A library to help you hash passwords.
const bcrypt = require('bcrypt');

//defines a structure must be followed by users of the application
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //  phone: {
  //    type: String,
  //    required: true,
  //  },
  //  userType: {
  //    type: String,
  //    required: true,
  //  },
  //  gender: {
  //    type: Number,
  //    required: true,
  //  },
  //  kyc_status: {
  //    type: Boolean,
  //    required: true,
  //  },
});

//mongoose middleware which implements securing the pasword using the bcrypt hash function
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
