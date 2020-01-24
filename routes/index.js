const express = require('express');
const router = express.Router();

//rendering index.pug with the data
router.get('/', (req, res) => {
  const indexTemplateData = require('../data/data.json').projects;
  res.render('index', indexTemplateData);
});

module.exports = router;