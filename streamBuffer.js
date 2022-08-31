const fs = require('fs')
const readStream = fs.createReadStream('./streamText.txt')
readStream.on('data', (chunk) =>{
    console.log(chunk.toString());
})

setTimeout(()=>{
    readStream.pause();
    console.log('Stream is pause');
}, 25)

setTimeout(() => {
    readStream.resume()
    console.log('Resume stream.');
}, 5000);
