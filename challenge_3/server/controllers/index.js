//controllers index
var getInfo = require('../models/index.js').getInfo;
var addInfo = require('../models/index.js').addInfo;
var get = function (req, res) {
  getInfo((err, rows) => {
    if(err){
      res.status(400).send();
      return;
    }
    
    res.status(200).send(rows);
 })
}

var post = function (req, res) {
  addInfo(req.body, (err) => {
    if(err){
      res.status(400).send();
      return;
    }
    res.sendStatus(201);
  })
}  

module.exports = {
	get, post
}