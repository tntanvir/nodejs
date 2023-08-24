const logEvents = require('./logEvents');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter { };

//init
const myEmitter = new MyEmitter();
myEmitter.on('hello', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('hello', 'Log emit runing')
}, 2000);