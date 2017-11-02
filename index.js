var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Welcome to Lead Management!')
})

app.get('/company', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "companyName": "Appshark" }));
})

app.get('/users', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "userName": "arokalla" }));
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
