const http = require('http')
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        console.log(req.url);
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<p>This is home page</p>');
        res.end();
    }
    else if (req.url === '/contact') {
        console.log(req.url);
        res.writeHead(200, {'content-type':'application/json'})
        res.write(JSON.stringify({course: 'Contact Information'}))
        res.end();
    }
    else{
        res.writeHead(200,{'content-type': 'application/json'})
        res.write(JSON.stringify({Data: 'Page not found'}));
        res.end();
    }
})

// const PORT = 6000;
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running port: ${PORT}`);

// server.listen(PORT);
// console.log(`Server is running, Listen port: ${PORT}`);