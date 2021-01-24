let express = require('express');
let app = express();
let path = require('path');

//app.use(express.static(path.join(__dirname, '..\src')));

app.use(require('./home'));
app.use(require('./register'));
app.use(require('./contact'));


app.listen(3000, ()=>{
    console.log("Server starting on port 3000");
});