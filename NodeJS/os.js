const os = require('os');

const totalMemory = os.totalmem() / 1024 / 1024; //MB
const freeMemory = os.freemem() / 1024 / 1024; //MB

console.log("Total Memory:",totalMemory,"MB");
console.log("Free Memory:",freeMemory,"MB");