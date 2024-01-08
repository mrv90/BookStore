const bcrypt = require('bcrypt');
const express = require('express');
const router = express();
const User = require('../models/user');

router.post('/', async (req, res) => {
  const { name, username, password } = req.body;
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      username,
      passwordHash,
    });
    res.status(201).json(newUser);
  } else {
    return res.status(409).json({
      error: 'this username already reserved',
    });
  }
});

module.exports = router;
