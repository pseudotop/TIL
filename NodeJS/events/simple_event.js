const EventEmitter = require('events'); // Class

class Job extends EventEmitter {}

const job = new Job();

job.on('warning', (season) => {
  console.log(`${season} is coming..`);
});

job.emit('warning', 'winter');