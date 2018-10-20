var express = require('express');
var app = express();
var path = require('path');
var request = require('request')

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/actuator/isAlive', (err, res) => {
    res.status(200).send("Is Alive!")
});

app.get('/actuator/isReady', (err, res) => {
    res.status(200).send("Is Ready!")
});

app.get('/api/stations', (req, res) => {
    request({
        uri: 'https://oslobysykkel.no/api/v1/stations',
        headers: {
            'Client-Identifier': 'e44519c73a069e34d97bf6238a34dc27'
        }
    }).pipe(res)
})

var port = process.env.PORT || 8080
app.listen(port)
console.log('Starting server at ' + port)
