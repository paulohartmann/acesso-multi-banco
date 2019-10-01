const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`route GET /mysql)`);
});

router.get('/:id', (req, res) => {
  res.send(`route GET /mysql ID: ${req.params.id})`);
});

module.exports = router;
