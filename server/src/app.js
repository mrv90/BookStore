const express = require('express');
const app = express();
const { connect } = require('./db');
const cors = require('cors');
const userRouter = require('./controllers/user');
const authRouter = require('./controllers/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// health actuator
app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'service is up!' });
});

// routers
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

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

connect(); // connect only one time .. so put it, down here !

module.exports = app;
