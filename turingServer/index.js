// const fs = require('fs');
// fs.writeFileSync('turing.txt', 'hebven with a b.');
const http = require('http');

const server = http.createServer((req, res) => {


    // the response goes here
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first web server</title></header>')
    res.write('<body><h1>Hello World</h1></body>')
    res.write('<html>')
    res.end();
})

server.listen(3000)