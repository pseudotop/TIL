import { combineReducers } from 'redux';

const songsReducer = (action) => {
  return [
    { title: 'Rap God', artist: 'Eminem', duration: '5:5' },
    { title: 'Animals', artist: 'Martin Garrix', duration: '3:10' },
    { title: 'Highway to hell', artist: 'AC/DC', duration: '3:50' },
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});