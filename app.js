var express = require('express');
var serveStatic = require('serve-static');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/static'));

app.use(bodyParser.json());

app.get('/', function(request, response) {
  var params = {
    hello: 'hello world',
    name: 'brian',
    friendsList: ['robert', 'kevin', 'sarah']
  };
  response.render('index.ejs', params);
});


var moreFriends = [
  'asdfawf',
  'dd',
  'av',
  '404',
  '4573',
  'hj'
];
app.get('/morefriends', function(request, response) {
  var num = parseInt(request.query.num, 10);

  var output = [];
  for (i = 0 ; i < num; i++) {
    output.push(moreFriends[i]);
  }
  response.json(output);
});

app.post('/sendfriend', function(request, response) {
  moreFriends.unshift(request.body.friend);
});

app.listen(8000);