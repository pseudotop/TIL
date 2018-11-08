const http = require('http');
const url = 'http://www.csszengarden.com';

http.get(url, (res) => {
  let chunkCount = 0;
  console.log(res);
  res.on('data', (chunk) => {
    chunkCount++;
    console.log('--------------');
    console.log(chunk.toString('utf8'));
  });
});