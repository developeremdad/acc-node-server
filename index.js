const http = require('http');
// console.log(http);
const server = http.createServer((req, res) =>{
    res.end('hello node js browse port hit koro kaj korbe.');
    console.log('server is running');
})
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running, Listen port: ${PORT}`);