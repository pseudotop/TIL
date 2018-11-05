// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');
const resultArea = document.querySelector('#result-area');

button.addEventListener('click', () => {
  const inputValue = document.querySelector('#js-input').value;
  pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (evt) => {
  if (evt.which === 13) {
    const inputValue = document.querySelector('#js-input').value;
    pushToDOM(inputValue);
  }
});
// 2. API를 활용해 data를 받는다. 그리고 가공
const API_KEY = 'oDwZ5XC3pC2tfXVv42zoqRQWDjAVUWC7';
let keyword = 'beer';
const URL =`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
console.log(URL);

// Ajax request
const GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', URL);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', (evt) => {
  const rawData = evt.target.response;
  const parsedData = JSON.parse(rawData);
  pushToDOM(parsedData);
});

// 3. GIF 파일들을 index.html에 밀어넣는다
const pushToDOM = (parsedData) => {
  // console.log(parsedData.data[0].images.fixed_height.url);
  imgURL = parsedData.data[0].images.fixed_height.url;
  console.log(imgURL);
  resultArea.innerHTML += `<img src="${imgURL}" alt="dog"/>`;
};