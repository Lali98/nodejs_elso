// console.log("ok")

/*console.log(__dirname);
console.log(__filename);*/

/*const add = require('./calculator.js');

console.log(add(12, 3));*/

const http = require('http');
const fs = require('fs')

const server = http.createServer(
    function (req, res) {

        switch (true) {
            case req.url === '/' && req.method === 'GET':
                fs.readFile(__dirname + '/home.html', function (err, data){
                    res.setHeader('Content-Type', 'text/html; charset="utf-8"');
                    res.writeHead(200);
                    res.end(data);
                });
                break;
            case req.url === '/bejelenkezes' && req.method === 'GET':
                fs.readFile(__dirname + '/login.html', function (err, data){
                    res.setHeader('Content-Type', 'text/html; charset="utf-8"');
                    res.writeHead(200);
                    res.end(data);
                });
                break;
            default:
                fs.readFile(__dirname + '/404.html', function (err, data){
                    res.setHeader('Content-Type', 'text/html; charset="utf-8"');
                    res.writeHead(404);
                    res.end(data);
                });
                break;

        }

        console.log(req.url)
        console.log(req.method)

    }
);
server.listen(8080);