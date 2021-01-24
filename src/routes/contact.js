let router = require('express').Router();

router.get('/contact', (req,res) =>{
    res.send('Contact');
});

module.exports = router;