# Node.js
> `node.js`는 브라우저 엔진기반(Chrome V8) 런타임이다. 
## 특성
- REPL (Read Evaluate Print Loop) 제공
```bash
$ node
# REPL 환경으로 접속
>
```
- 전역 객체 `global`을 지님. `javascript`는 `document`
- 노드에서 `.js`를 실행하면 `file`이 아닌 `module`로 로드함
- `node.js`로 모듈을 불러오면 자동으로 외부에 **function scope**하나가 붙는다
  - 내장 모듈 `loader.js`로 전처리한다
> 예시 `module/logger.js`
```javascript
(function (exports, require, module, __filename, __dirname) {
  const url = 'http://hphk.kr';

  const log = (msg) => {
    // Logic
    console.log(`Logging message: ${msg}`);
  }

  module.exports = log;
});
```
> https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js#L127-L134
```javascript
...
Module.wrap = function(script) {
  return Module.wrapper[0] + script + Module.wrapper[1];
};

Module.wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
];
...
```
- 모듈 load에도 순서가 있다
  1. 내장 모듈 찾기. 없으면 다음으로
  2. 외장 모듈 찾기. 없으면 다음으로
  3. 폴더 찾기