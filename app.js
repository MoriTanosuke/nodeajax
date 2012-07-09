var app = require('express').createServer();

var countries = ['Germany', 'France', 'Great Britain', 'Poland'];

app.get('/', function(req, res){
  res.send('<ul><li><a href="/countries">/countries</a></li>\n' +
    '<li><a href="/countries/gre">/countries/[SEARCHTERM]</a></li></ul>');
});
app.get('/countries', function(req, res){
  res.send(countries);
});
app.get('/countries/:searchterm', function(req, res){
  res.send(countries.filter(function(element, index, array) {return element.match(new RegExp(req.params.searchterm, 'g'));}));
});

app.listen(3000);

