const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('../router/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// health actuator
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'service is up!' });
});

// routers
app.use('/users', userRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

module.exports = app;
