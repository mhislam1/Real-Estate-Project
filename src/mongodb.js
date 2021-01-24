let mongoose = require('mongoose');
let express = require('express');
require('dotenv').config();

let app = express();

mongoose.connect(
    process.env.MONGO_CONNECTION, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true
    },
    () => console.log("Mongodb Connected")
);

app.listen(3000); 