const express = require('express');
const router = express.Router();
const timeCheck = require('../middleware/timeCheck');

router.get('/', timeCheck, (req, res) => {
    res.render('home');
});

router.get('/services', timeCheck, (req, res) => {
    res.render('services');
});

router.get('/contact', timeCheck, (req, res) => {
    res.render('contact');
});

module.exports = router;
