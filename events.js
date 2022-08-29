const events = require('events');
const em = new events.EventEmitter()

em.on('firstEvents', function(data){
    console.log(`this is first events. ${data}`);
})

em.emit('firstEvents', 'this is my first node js event server.');

