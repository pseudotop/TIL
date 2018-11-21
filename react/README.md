## REACT
### REACT 란?
> [페이스북 오픈 소스](https://opensource.fb.com/)에서 제공해주는 웹 프론트엔드 라이브러리

UI 프레임워크로 유명한 자바스크립트 라이브러리는 아래와 같다.
- **[React](https://reactjs.org/)**
- **[Angular](https://angular.io/)**
- **[Vue](https://vuejs.org/)**
이 중 **React**를 사용하여 프론트 웹을 구축해보자.

### 들어가기 전에
**React**를 사용하려면 몇 가지 세팅이 필요하다.

1. 툴 체인(toolchains) 설치 - [`create-react-app`](https://github.com/facebook/create-react-app)
2. `src`폴더 지우기
#### 1. 툴 체인(toolchains) 설치
**React** 공식 홈페이지에서 [추천하는 툴 체인](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains) 중 `create-react-app`은 `React 배우기`, `새 SPA (Single-page Application) 만들기`를 제공한다.

##### 1.1 빠른 사용법
> 리액트 공식 홈페이지 참고
```bash
$ npx create-react-app my-app
$ cd my-app
$ npm start
```
`my-app`의 **react**프로젝트를 만들고, 생성된  `package.json`파일 안에 `"script"` 키(key)를 보면 자동으로 생성된 `npm start`를 볼 수 있다.
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

### jsx

### components

### season-checker
1. 브라우저 JS 파일 로드
2. <App /> 생성
3. Geolocation API 가 위치정보 가져옴
4. React App 이 JSX 리턴 HTML 렌더링
5. .....
6. 사용자 위치정보 GET
7. `state` 객체를 `this.setState()`로 업뎃
8. React  가 Component 의 `state`업뎃을 눈치챔
9. React 가 해당 Component 의 `render()`를 실행
10. `render()`가 바뀐 내용(JSX)을 적용

컴포넌트 설정 방법은 두 가지가 있다.
1. 함수형
2. 클래스형


#### 클래스형
- 클래스형 사용하는 이유는 `state`를 처리하기 위함이다. 
컴포넌트 매개변수로 `props` 값이 안 들어올 때, `defaultProps`를 사용하면 **default**값을 설정할 수 있다.
##### Controlled Element
```javascript
 ...
  <div className="ui segment container">
    <form className="ui form">
      <label htmlFor="keyword">Search</label>
      <input
        id="keyword"
        type="text"
        onChange={e => this.setState({ keyword: e.target.value.toUpperCase() })}
        // onClick={this.onInputClick}
        value={this.state.keyword}
      />
    </form>
  </div>
 ...
```
- `setState()`는 비동기 함수다.
- 비속어 등의 특정한 단어를 처리하고 싶으면
```javascript
 ...
removeBadwords() {
  this.setState({
    
  });
}
 ...
```
- convetion: 3-rd party module을 **import**해올 떄, **React**는 다음과 같이 불러온다.
```javascript
import React, { Component } from 'react';
import axios from 'axios'; // third party module
import ... // third party modules 
```

