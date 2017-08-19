// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
'use strict';

const express = require('express');
const app = express();
const Port = 3000;
var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', function(req,res){
  res.send(jsonData);
});

app.listen(Port, () => {
  console.log('server up on port: ' + Port);
});
