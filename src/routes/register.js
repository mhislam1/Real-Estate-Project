const express = require('express');
const router = express.Router();

router.get('/register', (req, res) =>{
  res.send('register');
});


module.exports = router;


// router.post('/register', (req,res) => {
   
// });

//Create Schema
// let createSchema = () => {
//     let schema = new Schema({
//         first:{
//             type: String,
//             required: true
//         },
//         last:{
//             type: String,
//             required: true
//         },
//         middle:{
//             type: String,
//         },
//         username:{
//             type: String,
//             required: true
//         },
//         password:{
//             type: String,
//             required: true
//         },
//         email:{
//             type:String,
//             required: true
//         },
//         gender:{
//             type:String,
//             required: true
//         },
//         dob:{
//             type:Date,
//             required: true
//         }
//     });
// }