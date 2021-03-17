const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/register', (req, res) =>{
  res.send('register');
});

router.post('/register', (req, res) => {

});

module.exports = router;