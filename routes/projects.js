const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/:id', (req, res) => {

  const { id } = req.params;
  
  res.render('project', {data: data, id: id});
});

module.exports = router;