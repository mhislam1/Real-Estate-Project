let router = require('express').Router();

router.get('/contact', (req,res) =>{
    res.send('contact');
});

module.exports = router;