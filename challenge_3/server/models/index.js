var db = require('../db/index.js');

  var getInfo = function (callback){
    db.query('SELECT * FROM customers', function(err, results){
      if(err){
        throw err; 
        return;
      }
      callback(null, results);
    })
  }
  
  var addInfo = function (newItem, callback){
    console.log('here it is', newItem); 
    
    db.query('INSERT INTO customers SET ?', newItem, function(err, data){
      if(err){
        throw err;
        return;
      }
      callback(null, data);
  })
}
module.exports.getInfo = getInfo;
module.exports.addInfo = addInfo;

