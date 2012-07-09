var app = require('express').createServer();

/* configuration */
app.set('view engine', 'jade');


var countries = ['Germany', 'France', 'Great Britain', 'Poland'];

app.get('/', function(req, res){
  res.render('index', {'pageTitle': 'Country Service'});
});
app.get('/countries', function(req, res){
  res.send(countries);
});
app.get('/countries/:searchterm', function(req, res){
  res.send(countries.filter(function(element, index, array) {return element.match(new RegExp(req.params.searchterm, 'g'));}));
});
/* HTML resources */
app.get('/func.js', function(req, res){
  res.sendfile('views/func.js');
});

app.listen(3000);

