const { default: mongoose } = require('mongoose');
require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.mongo);
    console.log('MongoDB is up & running !');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = { connect };
