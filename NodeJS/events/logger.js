const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(msg) {
    this.emit('logMessage', { id: 1, url: 'http://blog.com' });
    this.emit('logging', { data: 'hello' });
  }
}

module.exports = Logger;