const http = require('http');
const host = "localhost";
const port = "5555";

 //create a server object:
http.createServer(function (req, res) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write('<h1> Hola Mundo </h1>'); //write a response to the client
        res.end(); //end the response
    }).listen(port, host); //the server object listens on port 5555



