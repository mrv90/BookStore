const http = require('http');
const app = require('./app');
require('dotenv').config();

http.createServer(app).listen(process.env.port, () => {
  console.log(`Server is listening on ${process.env.port}`);
});
