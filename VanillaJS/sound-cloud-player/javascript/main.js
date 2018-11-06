/* 1. 검색 */

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
  getEmbed: (inputAddr) => {
    SC.oEmbed(inputAddr, {
      auto_play: true
    }).then(function (embed){
      console.log(embed);
    })
  }
};

SoundCloudAPI.init();
SoundCloudAPI.getTrack('busker');

/* 3. 카드 보여주기 */
SoundCloudAPI.renderTracks = (tracks) => {
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
    const icon = document.createElement('i');
    icon.classList.add('add', 'icon');
    const span = document.createElement('span');
    span.innerHTML = 'Add to playlist';

    button.appendChild(icon);
    button.appendChild(span);

    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

    const searchResults = document.querySelector('#js-search-results');
    searchResults.appendChild(card);
  });
};

/* 4. Playlist 에 추가하고 실제로 재생하기 */