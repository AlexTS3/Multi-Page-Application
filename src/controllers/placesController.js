const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('places')
})
router.get('/add-place', (req, res) => {
    res.render('add-place');
});

router.get('/search', (req, res) => {
    res.render('search');
});

module.exports = router;