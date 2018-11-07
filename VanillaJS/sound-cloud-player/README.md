# 2. SoundCloud Player 만들기
**실행 화면**
<p align="center">
<img src="https://user-images.githubusercontent.com/11497589/48048146-d907f700-e1dd-11e8-9024-486a52b83e6c.JPG" width="70%"/>
</p>
-----------

- 지난 **giphy-search-engine**과 마찬가지로 외부 API를 활용하는 `static page`를 만든다
- SoundCloud의 API (https://developers.soundcloud.com/)는 `Promise`를 활용하는 API다
  - 현재(18/11/06)는 API 접근 토근을 받을 수 없다. ~~임시로 닫아놓았다~~
  - 강사님의 토큰으로 접근하고 있으니 **나중에 변경이 필요**
- 브라우저가 새로고침되거나 닫았다가 다시 실행할 때, 세션과 비슷한 `LocalStorage`(https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)를 사용한다
## 2.1. 주요 기능
- [API using Promise](#2.1.1._API_using_Promise)
- [DOM 다루기](#2.1.2._DOM_다루기)
- [LocalStorage 사용](#2.1.3._LocalStorage_사용)
### 2.1.1. API using Promise
- `Promise`는 **콜백 문제**를 타개하기 위한 패턴 중 하나이다.
- `javascript/main.js`
```javascript
 ...
const SoundCloudAPI = {
 ...
  init: () => {
    SC.initialize({
      client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
  },
  getTrack: (inputValue) => {
    // SC.get()이후에 .then은 Promise의 return이 resolve가 나올 때를 의미
    SC.get('/tracks', {
      q: inputValue
    }).then(function (tracks) { // <- 이거
      SoundCloudAPI.renderTracks(tracks);
      console.log(tracks);
    });
  },
 ...
}
```
- 본 프로젝트에서는 `SC.get`, `SC.oEmbed` 두 개의 Promise를 사용하였다

### 2.1.2. DOM 다루기
- 기존에 동적으로 변환 시키기 위한 자바스크립트 문법은 단순히 `innerHTML`을 사용하고 안에 문자열로 태그를 만들어 넣었다
- 이 방법은 추후 많은 기능을 이용할 때, 성능의 문제를 보이므로 지양해야 한다
- 본 프로젝트에서 **DOM**을 직접 다루는 방법을 사용하였다
- `javascript/main.js`
```javascript
 ...
      // Image
      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      const imageImg = document.createElement('img');
      imageImg.classList.add('image_img');
      imageImg.src = (track.user.avatar_url || 'http://lorempixel.com/100/100/abstract');
      imageDiv.appendChild(imageImg);
 ...
```
1. `createElement`: 태그(요소) 생성
2. `classList.add`: 클래스 추가
3. `appendChild`:  특정 태그를 상위 태그에 종속시킴
### 2.1.3. LocalStorage 사용
- **session**과 유사한 기능을 한다. 차이점은 서버 측에 저장하는 것이 아닌 클라이언트 측에 내용들을 저장한다
- 본 프로젝트에서는 **플레이 리스트**에 저장한 카드를 `LocalStorage`를 통해 저장해둔다.
- `javascript/main.js`
```javascript
 ...
 addPlaylist: (trackURL) => {
    SC.oEmbed(trackURL, {
      auto_play: true
    }).then(function (embed) {
      // console.log(embed);
      const playbox = document.createElement('div');
      playbox.innerHTML = embed.html;

      UI.sidebar.insertBefore(playbox, UI.sidebar.firstChild);

      // local storage
      localStorage.setItem('playlist', UI.sidebar.innerHTML);
      console.log(localStorage);
    });
  },
 ...
```
## 2.2. 더 보기
- lorem pixel : random image generator
  - http://lorempixel.com/
- `Promise`관련: 콜백 지옥
  - https://librewiki.net/wiki/%EC%BD%9C%EB%B0%B1_%EC%A7%80%EC%98%A5