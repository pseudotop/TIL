/* 1. 검색 */
const sidebar = document.querySelector('#js-playlist');
sidebar.innerHTML = localStorage.getItem('playlist');

const inputArea = document.querySelector(".js-search");
const searchButton = document.querySelector(".js-submit");
const resetButton = document.querySelector("#js-reset");

inputArea.addEventListener('keyup', (evt) => {
  if (evt.which === 13) {
    const inputValue = document.querySelector('.js-search').value;
    SoundCloudAPI.getTrack(inputValue);
  }
});
searchButton.addEventListener('click', () => {
  const inputValue = document.querySelector('.js-search').value;
  SoundCloudAPI.getTrack(inputValue);
});
resetButton.addEventListener('click', () => {
  localStorage.clear();
  sidebar.innerHTML = localStorage.getItem('playlist');
})

/* 2. SoundCloud API  사용하기 */
const SoundCloudAPI = {
  // hashmap => key : value
  init: () => {
    SC.initialize({
      client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
  },
  getTrack: (inputValue) => {
    SC.get('/tracks', {
      q: inputValue
    }).then(function (tracks) {
      SoundCloudAPI.renderTracks(tracks);
      console.log(tracks);
    });
  },
};

SoundCloudAPI.init();


/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = (tracks) => {
  const searchResults = document.querySelector('#js-search-results');
  searchResults.innerHTML = null;
  tracks.forEach(track => {
    // Card
    const card = document.createElement('div');
    card.classList.add('card');
    // console.log(card);

    // Image
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    const imageImg = document.createElement('img');
    imageImg.classList.add('image_img');
    imageImg.src = (track.user.avatar_url || 'http://lorempixel.com/100/100/abstract');
    imageDiv.appendChild(imageImg);

    // Content
    const content = document.createElement('div');
    content.classList.add('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const link = document.createElement('a');
    link.href = track.permalink_url;
    link.target = '_blank'; // 새 탭에서 띄우기
    link.innerHTML = track.title;

    header.appendChild(link);
    content.appendChild(header);

    // Button
    const button = document.createElement('div');
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
    button.addEventListener('click', () => {
      SoundCloudAPI.addPlaylist(track.permalink_url);
    });
    const icon = document.createElement('i');
    icon.classList.add('add', 'icon');
    const span = document.createElement('span');
    span.innerHTML = 'Add to playlist';

    button.appendChild(icon);
    button.appendChild(span);

    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

    searchResults.appendChild(card);
  });
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */
SoundCloudAPI.addPlaylist = (trackURL) => {
  SC.oEmbed(trackURL, {
    auto_play: true
  }).then(function (embed){
    // console.log(embed);
    const sidebar = document.querySelector('#js-playlist');
    const playbox = document.createElement('div');
    playbox.classList.add('inner');
    playbox.innerHTML = embed.html;

    sidebar.insertBefore(playbox, sidebar.firstChild);

    // local storage
    localStorage.setItem('playlist',playbox.innerHTML);
    console.log(localStorage);
  });
};