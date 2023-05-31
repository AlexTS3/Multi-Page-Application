const router = require('express').Router();

const homeController = require('./controllers/homeController');

router.use(homeController);
router.use('/search', (req, res) => {
    res.render('search');
});
router.use('*', (req,res) => {
    res.redirect('/404')
})

module.exports = router;