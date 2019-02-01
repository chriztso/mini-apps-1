var express = require('express');
var app = express();
var getInfo = require('./server/models/index.js').getInfo;
var addInfo = require('./server/models/index.js').addInfo;
var bodyParser = require("body-parser");
var controller = require('./server/controllers/index.js');
const PORT = 3000; 

app.use(bodyParser.json());
app.use(express.static('public'));
app.get('/customers', controller.get);

app.post('/customers', controller.post);

app.listen(PORT, () => {console.log('LISTENING NOW')});

  