const express = require('express');
const router = express.Router();

//rendering index.pug with the data
router.get('/', (req, res) => {
  const { projects } = require('../data/data.json');
  res.render('index', { projects });
});

module.exports = router;