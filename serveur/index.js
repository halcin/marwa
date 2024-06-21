const express = require('express') ;
const app = express();


const courriers = require('./diffuses.json')
app.get('/courriers', (req,res) => {    res.status(200).json(courriers)});

app.listen(8888, () => {  console.log("Serveur à l'écoute") })