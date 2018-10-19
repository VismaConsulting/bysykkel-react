var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/actuator/isAlive', (err, res) => {
    res.status(200).send("Is Alive!")
});

app.get('/actuator/isReady', (err, res) => {
    res.status(200).send("Is Ready!")
});

var port = process.env.PORT || 8080
app.listen(port)
console.log('Starting project at ' + port)