let express = require('express');
let app = express();

app.use('/', require('./home'));
app.use('/register', require('./register'));

app.listen(5000, ()=>{
    console.log("Server starting on port 5000");
});