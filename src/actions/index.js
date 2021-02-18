//Action creator
export const selectSong = (song) => {
    //Return an sction
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
