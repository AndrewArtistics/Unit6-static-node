const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

/* renders the about page*/
router.get('/about',(req,res)=>{
    res.render('about');
});

module.exports = router;