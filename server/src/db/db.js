require('dotenv').config();
const { default: mongoose } = require('mongoose');
const User = require('../models/user');

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongo);
    console.log('MongoDB is up & running !');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const disconnect = async () => {
  try {
    // await mongoose.connection.close(); // don't use this !
    await mongoose.disconnect();
    console.log('MongoDB is off');
  } catch (error) {
    console.log(error);
  }
};

const findUser = async (singleUser) => {
  return await User.findOne(singleUser);
};

const saveUser = async (newUser) => {
  const { name, username, hashed } = newUser;
  return await new User({ name, username, hashed }).save();
};

module.exports = { connect, disconnect, findUser, saveUser };
