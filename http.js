const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url == '/') {
        res.write('Welcome to the Homepage');
        res.end();
    }
    else if(req.url == '/about') {
        res.write('This is about page');
        res.end();
    }
    else {
        res.write(`
    OOPS!
    The page you're looking for is not there.
    `);
    res.end();
    }
})

server.listen(8000);


// const http = require("http");

// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//         res.end('Welcome');
//     } else {
//         res.end('Sorry');
//     }
// })

// server.listen(3000);