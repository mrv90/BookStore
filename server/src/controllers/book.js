const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'successfull - GET',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successfull - GET by id',
    metadata: {
      hostname: req.params.hostname,
      method: req.method,
    },
  });
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: 'successfull - POST',
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successfull - PUT by id',
    metadata: {
      hostname: req.params.hostname,
      method: req.method,
    },
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'successfull - DELETE by id',
    metadata: {
      hostname: req.params.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
