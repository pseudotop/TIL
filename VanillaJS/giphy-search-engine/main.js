// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector('#js-button');
const inputArea = document.querySelector('#js-input');
const resultArea = document.querySelector('#result-area');
const centerImgArea = document.querySelector('.img-center');

button.addEventListener('click', () => {
  const inputValue = document.querySelector('#js-input').value;
  requestAJAX(inputValue);
});

inputArea.addEventListener('keyup', (evt) => {
  if (evt.which === 13) {
    const inputValue = document.querySelector('#js-input').value;
    requestAJAX(inputValue);
  }
});

// 2. API를 활용해 data를 받는다. 그리고 가공
const requestAJAX = (keyword, option) => {
  const API_KEY = 'oDwZ5XC3pC2tfXVv42zoqRQWDjAVUWC7';
  const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;
  console.log(URL);

  // Ajax request
  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', URL);
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load', (evt) => {
    const rawData = evt.target.response;
    const parsedData = JSON.parse(rawData);
    if (!option) {
      resultArea.innerHTML = null;
      pushToDOM(parsedData);
    } else {
      pushToDOM(parsedData, option);
    }
  });
};

// 3. GIF 파일들을 index.html에 밀어넣는다
const pushToDOM = (parsedData, option) => {
  // console.log(parsedData.data[0].images.fixed_height.url);
  // imgURL = parsedData.data[0].images.fixed_height.url;
  // console.log(imgURL);
  const imgDataSet = parsedData.data;
  console.log(imgDataSet);

  if (!option) {
    imgDataSet.forEach(img => {
      const imgURL = img.images.fixed_height.url;
      const imgTitle = img.title;
      resultArea.innerHTML += `<img src="${imgURL}" alt="${imgTitle}"/>`;
    });
  } else if (option == 'center') {
    const imgURL = imgDataSet[0].images.fixed_height.url;
    const imgTitle = imgDataSet[0].title;
    console.log(imgURL);
    console.log(imgTitle);
    centerImgArea.innerHTML = `<img src="${imgURL}" alt="${imgTitle}" class="img-center"/>`;
  }
};