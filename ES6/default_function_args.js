/* ES5 */
function makeRequest(url, method) {

}

makeRequest('http://hphk.io');
/*
** 함수 오버로딩 안됨
** makeRequest('url', 'GET');
** makeRequest('url'); 매개변수 하나가 없어도 같은 함수에서 호출
*/

/* ES6 */
function makeRequest2 (url, method='GET') {
  doSomething(url, method);
}

/* 실습 */
function sum (a=0, b=0) {
  return a + b;
}
const sum = (a=0, b=0) => a + b;

function addOffset(style={}) {
  style.offset = '10px';
  return style;
}