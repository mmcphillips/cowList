//send data to models from client
const model = require('./models.js');
//send queries to models

module.exports = {
  cows: {
    get: function(req, res) {
      model.cows.get(function(err,results){
        res.json(results);
        if (err){console.log(err)}
      })
     },

    post: function(req, res) {
      var params = [req.body.name, req.body.description];
      console.log(req);
      model.cows.post(params, function(err, results){
        if (err){console.log(err)}
        res.json(results);
      })
    }
  }
}