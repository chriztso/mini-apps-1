var express = require('express');
var app = express();

var PORT = 3000; 

app.use(express.static('client/dist'));
app.use(express.static('client/styles'));

app.get('/', (req, res) =>{
res.send('Hello');
});

app.listen(PORT, console.log('listening'));

