require('dotenv').config();
const { default: mongoose } = require('mongoose');

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

module.exports = { connect, disconnect };
