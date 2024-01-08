const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express();
const User = require('../models/user');
require('dotenv').config();

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
    res.status(200).send({ username, newToken });
  } else {
    res.status(403).json({ error: 'incorrect username or password' });
  }
});

module.exports = router;
