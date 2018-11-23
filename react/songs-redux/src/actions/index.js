// Action Creator : Function
// Action : Object

export const selectSong = (song) => {
  return { // returns action
    type: 'SONG_SELECTED',
    payload: song
  }
};