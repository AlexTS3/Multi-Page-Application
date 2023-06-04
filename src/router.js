const router = require('express').Router();

const homeController = require('./controllers/homeController');
const placesController = require('./controllers/placesController');

router.use(homeController);
router.use('/places', placesController);
router.use('*', (req, res) => {
    res.redirect('/404')
})

module.exports = router;