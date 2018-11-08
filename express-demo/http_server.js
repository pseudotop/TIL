const http = require('http');

const data = {
  ceo: 'john',
  director: 'neo'
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('HappyHacking');
    res.end();
  }
  if (req.url === '/api') {
    res.write(JSON.stringify(data));
    res.end();
  }
});

server.listen(3000, (e) => {
  console.log(e);
});