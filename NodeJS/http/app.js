const http = require('http');
const url = 'http://www.csszengarden.com';

http.get(url, (res) => {
  let chunkCount = 0;
  console.log(res);
  // chunk는 가변적인 byte단위로 데이터가 전송된다.
  // buffer는 특정 구간(JSON전부, XML전부)을 한 번에 받기위해 사용한다
  res.on('data', (chunk) => {
    chunkCount++;
    console.log('--------------');
    console.log(chunk.toString('utf8'));
  });
  res.on('end', () => {
    console.log(`res가 ${chunkCount}개로 나눠졌어요.`);
  })
});