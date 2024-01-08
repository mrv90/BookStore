const express = require('express');
const router = express();

router.post('/register', (req, res, next) => {
  // find user
  // if the user exists
  // return the response: email exist try logging in
  // else
  // encrypt the password
  // set the password with the encrypted
  // save the user to the database
});

router.post('/login', (req, res) => {});

module.exports = router;
