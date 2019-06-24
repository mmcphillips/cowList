//purpose
const express = require('express');
const controller = require('./controller.js');
const bodyParser = require('body-parser');

//init app
const app = express();
const port = 3000;
app.listen(port);
app.use(express.static('public'));
app.use(bodyParser.json());

//set get route, query select * from table cowdesc
app.get('/api/cows', controller.cows.get)

//set post route query insert INTO table cowdesc
app.post('/api/cows', controller.cows.post)

//not dynamic
// app.put('/api/cows/:id', );
// ap.delete('/api/cows/:id', );
app.get('/', function(req,res){
  res.send('thisworksatleast');
})