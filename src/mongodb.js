let mongoose = require('mongoose');
let express = require('express');
require('dotenv').config();

let app = express();


app.get('/', (req, res) =>{
    res.send('Hello');
})

// mongodb+srv://newuser:<password>@realestate.ozokl.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    process.env.MONGO_CONNECTION, 
    {useNewUrlParser: true, 
    useUnifiedTopology: true
    },
    () => console.log("Mongodb Connected")
);

app.listen(3000); 