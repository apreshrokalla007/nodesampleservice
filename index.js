var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('************ Welcome to Backer Media Lead Management! **************1')
})

app.get('/company', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "companyName": "Appshark" }));
})

app.get('/user', function(request, response) {
  response.status(200);
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ "userName": "Ram" }));
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
