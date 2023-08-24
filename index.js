const logEvents = require('./logEvents');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter { };

//init
const myEmitter = new MyEmitter();
myEmitter.on('log', logEvents(), msg);

setTimeout(() => {
    myEmitter.emit('log', 'Log emit runing')
}, 2000);