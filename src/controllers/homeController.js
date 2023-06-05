const router = require('express').Router();
const placeManager = require('../managers/placeManager');

router.get('/', async (req, res) => {

    const { name, activity, vehicle } = req.query;

    const places = await placeManager.getAll(name, activity, vehicle);

    res.render('index', { places, name, activity, vehicle });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;