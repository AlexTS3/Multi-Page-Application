const router = require('express').Router();
const placeManager = require('../managers/placeManager');

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;