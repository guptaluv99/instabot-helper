var http = require('http');
var express = require('express');
var database = require('./database.js');

var app = express();
var port = 9000;

var hashtags = require('./app/hashtags.js',hashtags);

var bodyParser   = require('body-parser');
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

app.use(express.static('public'));

app.use('/api/hashtags', hashtags);

app.get('/*', function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});

var server = http.createServer(app);
console.log('Exambazaar loaded on port ' + port);
server.listen(port);