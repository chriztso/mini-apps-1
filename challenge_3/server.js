var express = require('express');
var app = express();
var getInfo = require('./server/models/index.js').getInfo;
var addInfo = require('./server/models/index.js').addInfo;

const PORT = 3000; 


app.use(express.static('public'));
app.get('/customers', function (req, res) {
  getInfo((err, rows) => {
    if(err){
      res.status(400).send();
      return;
    }
    res.status(200).send(rows);
  })
});

app.post('/customers', function (req, res) {
  addInfo(req.body, (err) => {
    if(err){
      res.status.send();
      return;
    }
    res.sendStatus(201);
  })
});

app.listen(PORT, () => {console.log('LISTENING NOW')});

  