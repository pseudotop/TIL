// 1. React 와 ReactDOM 라이브러리 import
import React from 'react';
import ReactDOM from 'react-dom';

// 2. React 컴포넌트를 생성 [ 1) 함수 ,2) 클래스 ]
function getButtonText() {
  return 'CLICK';
}

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = () => {
  // jsx 특성
  //return <div>HappyHacking</div>
  //const buttonText = { key: value }; // object는 호출 못함
  const buttonText = ['CL', 'ICK'];
  return (
    <div>
      <h3>{getTime()}</h3>
      <label htmlFor="name" className="name_label">Enter name:</label>
      <input type="text" id ="name"/>
      <button style={{ backgroundColor: 'blue', color: 'white', border: 'solid 1px black'}}> 
        {buttonText}
      </button>
    </div>
  )
}

// 3. 화면에 HTML을 띄우기
ReactDOM.render(
  // jsx 특성
  <App />,
  document.querySelector('#root')
);