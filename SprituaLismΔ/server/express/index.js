const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const http = require('http');
const httpServer = http.createServer(app);

app.use('/', express.static('app'))
app.use(bodyParser.json());


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../../index.html'));
  });

app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("irresponsive route");
});


const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type':'text/html'});
  res.end('<h1>Hello NodeJS</h1>');
});

server.listen(8080, '0.0.0.0', () => console.log(`Server running on port http://localhost:${port}`));
//app.listen(port, () => console.log(`http://localhost:${port}`));
