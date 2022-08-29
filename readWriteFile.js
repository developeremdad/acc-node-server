const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) =>{
    // ======================== asynchronously Read File data =======================
    if (req.url === '/readFileAsync') {
        fs.readFile('readTextFile.txt',(err, data)=>{
            if (err) {
                res.writeHead(404, {'content-type': 'application/json'})
                res.write(JSON.stringify({error: 'cant read file, check file location. ====' , err}))
                res.end();
            }
            else{
                res.writeHead(200, {'content-type': 'text/html'})
                res.write(`<h3>${data}</h3>`);
                res.end();
                console.log('Read operation complete. Asynchronously');
            }
        })
    }
    // ======================= synchronously Read file ==========================
    else if (req.url === '/readFileSync') {
        const data = fs.readFileSync('readTextFile.txt');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h3>${data}</h3>`);
        res.end();
        console.log('Read operation complete. synchronously');
        
    }
    //===================== write file section  ======================= 
    else if(req.url === '/writeFile'){
        fs.writeFile('writeFile.txt','Hello this is write file', (err, data) =>{
            if (err) {
                res.writeHead(404, {'content-type' : 'application/json'})
                res.write({error: err})
                res.end();
            }
            else{
                res.writeHead(200, {'content-type' : 'text/html'})
                res.write('<h2>Successfully write file.</h2>')
                res.end();
                console.log('Write file completed.');
            }
        })
    }
    else{
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>Page not Found. please enter right url.</h1>`);
        res.end();
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`Read Write Server is running, PORT: ${PORT}`);