const router = require('express').Router();

const placeManager = require('../managers/placeManager');

router.get('/', async (req, res) => {

    const { name, activity, vehicle } = req.body;

    const places = await placeManager.getAll(name, activity, vehicle)

    res.render('places', { places, name, activity, vehicle })
})
router.get('/add-place', (req, res) => {
    res.render('add-place');
});

router.post('/add-place', async (req, res) => {
    const {
        name,
        activity,
        description,
        imageUrl,
        vehicle
    } = req.body;


    await placeManager.create({
        name,
        activity,
        description,
        imageUrl,
        vehicle,
    });

    res.redirect('/places')
});

router.get('/search', async (req, res) => {
    const { typeActivity, activity, vehicle } = req.query;

    const places = await placeManager.getAll(typeActivity, activity, vehicle);

    res.render('search');
});

router.get('//details', (req, res) => {
    const place = placeManager.getOne(req.params.placeId).lean();

    if (!place) {
        return res.redirect('/404');
    };

    res.render('details', { place });
})
module.exports = router;