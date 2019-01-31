var db = require('../models/index.js');

  var getInfo = function (callback){
    db.query('SELECT * FROM customers', function(err, results){
      if(err){
        throw err; 
        return;
      }
      callback(null, result);
    })
  }
  
  var addInfo = function (newItem, callback){
    var sql = `INSERT INTO customers (name, email, password, address, phonenumber, creditcard, expiration) 
    VALUES ('${newItem.name}', '${newItem.email}', '${newItem.password}', '${newItem.address}', '${newItem.phonenumber}', '${newItem.creditcard}', 
            '${newItem.expiration}')`; 
    db.query(sql , function(err){
      if(err){
        throw err;
        return;
      }
  })
}
module.exports.getInfo = getInfo;
module.exports.addInfo = addInfo;

