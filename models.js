//purpose: communicate queries from controller to database
var database = require('./database.js');
//sends queries to dabase
module.exports = {
  cows: {
    //select * FROM cowdesc
    get: function (callback){
      var query = "SELECT * from cowdesc";
      database.query(query, function(err, results){
        if (err){
          console.log('error')
        }
        callback(err, results);
      })
    },
    //insert into cowdesc with query params of name and desc
    post: function (params, callback){
      var query = "insert into cowdesc (name, description) VALUES (? , ?)"
      database.query(query, params, function(err, results){
        if (err){
          console.log('error');
        }
        callback(err, results);
      })
    }
  }
};