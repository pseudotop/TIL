## Express 기초
> `Express`는 npm 저장소에 등록된 모듈 중에 하나이다. `node.js`의 웹 프레임워크 중에서 가장 많이 사용되는 프레임워크가 바로 `Express`다. 이외의 웹 프레임워크로는 `Koa2`, `Sails.js`등이 있다.[1](#_References)

### 들어가기 전에
아래의 환경이 미리 구성되어 있어야 한다.
> prerequisite
- nodejs
- npm
- express

### 1. REST API 사용

```javascript
app.get('/', (req, res) => {
  res.send('Happy Hacking');
});
```

### 2. JOI 활용
 웹 서비스를 이용하는 사용자가 개발자의 마음대로 항상 일정한 데이터를 입력을 해준다는 보장이 없다. 따라서, POST로 입력받는 데이터의 유효성(validate) 검사는 필수다. 이를 개발자가 조금 더 쉽고  개발할 수 있도록 도와주는 `node`모듈이 있는데 바로 `joi`다.
```javascript
{ error: null,
  value: { title: 'Vanilla Sky' },
  then: [Function: then],
  catch: [Function: catch] }
```
```javascript
{ error:
   { ValidationError: child "title" fails because ["title" is not allowed to be empty]
   ...
   },
  value: { title: '' },
  then: [Function: then],
  catch: [Function: catch] }

{ error:
   { ValidationError: child "title" fails because ["title" length must be at least 2 characters long]
   ...
   },
  value: { title: '1' },
  then: [Function: then],
  catch: [Function: catch] }
```
### References
- "10 BEST NODE.JS FRAMEWORKS IN 2018", da-14 blog, https://da-14.com/blog/10-best-nodejs-frameworks
- 