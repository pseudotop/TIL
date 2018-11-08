# 1. XML Parsing

**실행 화면**

<div style="float:left">
<img width="40%" src="https://user-images.githubusercontent.com/11497589/48119905-e8f20a80-e2b3-11e8-90ea-4b3b66936fbf.JPG">
<img width="40%" src="https://user-images.githubusercontent.com/11497589/48119906-e8f20a80-e2b3-11e8-9f4a-9031a212dbef.JPG">
</div>

--------------

- 본 프로젝트는  `static page`의 작동원리 이해를 위한 가이드다. `HTML`, `CSS`, `JavaScript`를 활용하여 간단한 동작 예시를 구현하였다.
- `JavaScript`는 `ECMAScript 6(ES6)`를 사용하였다. 다음과 같은 `ES6` 양식을 사용하였다.
  * const, let
  * arrow function 

--------------
## 1.1. 주요 기능

- [EventListener](#111-EventListener)
- [AJAX](#112-AJAX)

### 1.1.1. EventListener
- `EventListner`는 다양한 **event**를 가지고 있다. 마우스, 키보드 등으로 입력에 변화를 주었을 때 일어나는 일들에 대해 **callback 함수**를 호출할 수 있다.
- EventListener API - <https://developer.mozilla.org/ko/docs/Web/API/EventListener>
- `main.js`
```javascript
 ...
button.addEventListener('click', () => {
  // value는 <input type="text" id="js-input">의 값
  const inputValue = document.querySelector('#js-input').value;
  requestAJAX(inputValue);
});

inputArea.addEventListener('keyup', (evt) => {
  // evt.keyCode가 deprecated되어서 evt.which를 사용
  // 여기서 13번은 Enter를 의미
  if (evt.which === 13) {
    const inputValue = document.querySelector('#js-input').value;
    requestAJAX(inputValue);
  }
});
 ...
```
### 1.1.2. AJAX
- **AJAX (Asynchronous JavaScript and XML)** 는 비동기적 웹 어플리케이션 제작을 위한 기법이다. 
- `giphy`라는 gif 이미지 저장 웹에서 Open API를 제공해주어 연습해보았다.
- `API_KEY`는 REST API를 이용할 때 필요한 토큰이다.
- `XMLHttpRequest()`로 **JSON**을 가져올 수 있다.
```javascript
 ...
// option은 띄우는 이미지 위치를 상황에 맞게 호출하기 위한 매개변수이다.
// option값이 없으면 일반 검색 결과에 나타나고, 있으면 배너로 불러들인다.
const requestAJAX = (keyword, option) => {
  // API_KEY: api서버에 접근하는 데 필요한 인증키
  const API_KEY = 'oDwZ5XC3pC2tfXVv42zoqRQWDjAVUWC7';
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
  console.log(URL);

  // Ajax request
  const GiphyAJAXCall = new XMLHttpRequest();
  // GET + URL을 준비한다
  GiphyAJAXCall.open('GET', URL);
  // 서버에 준비한 요청을 보낸다
  GiphyAJAXCall.send();

  // 서버로부터 load하면 콜백을 호출한다
  GiphyAJAXCall.addEventListener('load', (evt) => {
    const rawData = evt.target.response;
    // 데이터가 받아와져도 JSON구조를 읽지 못하는 String으로 읽기 떄문에
    // JSON.parse(rawData)가 필요하다
    const parsedData = JSON.parse(rawData);
    if (!option) {
      resultArea.innerHTML = null;
      pushToDOM(parsedData);
    } else {
      pushToDOM(parsedData, option);
    }
  });
};
 ...
```
--------------
## 1.2. 더 해보기

- API 서비스 목록
  - OpenLibrary <https://openlibrary.org/>
  - PokeAPI <https://pokeapi.co/>
