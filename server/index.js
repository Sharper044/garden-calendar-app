const express = require('express');
const bodyParser = require('body-parser');
const gardenServerControler = require('./controlers/gardenServerControler.js');
const plantData = require('./data/plantData.js');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public/build'));

var baseURL = '/api/GTO';
app.get(baseURL, gardenServerControler.read);
app.post(baseURL, gardenServerControler.create);

const port = 3030;
app.listen(port, ()=>{
    console.log(`Watching for crops to germinate on port ${port}.`)
});