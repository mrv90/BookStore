const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express();
const User = require('../models/user');
const Session = require('../models/session');
require('dotenv').config();

const SessionStates = {
  unknown: 0,
  active: 1,
  inactive: 2,
};

// login
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const inDbUser = await User.findOne({ username });
  const isThisPassOk =
    inDbUser !== null && bcrypt.compare(password, inDbUser.passwordHash)
      ? true
      : false;

  if (inDbUser && isThisPassOk) {
    const newToken = jwt.sign(
      { username: username, id: inDbUser.id },
      process.env.secret_access_toekn,
      {
        expiresIn: 60 * 60,
      }
    );
    await Session.create({ userId: inDbUser.id, state: SessionStates.active });

    res.status(200).send({ id: inDbUser.id, token: newToken });
  } else {
    res.status(403).json({ error: 'incorrect username or password' });
  }
});

// logout
router.delete('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.secret_access_toekn);
    const { id: userId } = decoded;
    const activeSession = await Session.findOne({ userId: userId }).exec();

    if (activeSession) {
      await Session.findByIdAndUpdate(activeSession.id, {
        state: SessionStates.inactive,
      });
      res.status(200).end();
    } else res.status(400).json({ error: 'invalid request' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
