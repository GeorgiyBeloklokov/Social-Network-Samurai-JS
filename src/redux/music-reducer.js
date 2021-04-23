const ADD_POST_MUSIC_TEXT_AREA = 'ADD-POST-MUSIC-TEXT-AREA';
const UPDATE_POST_MUSIC_TEXT_AREA = 'UPDATE-POST-MUSIC-TEXT-AREA';

const musicReducer = (state, action) => {

    // Music area
    switch (action.type) {
        case 'ADD-POST-MUSIC-TEXT-AREA':
            let musicPostserv = {
                id: 6,
                message: state.newPostMusic
            };
            state.messages.push(musicPostserv);
            state.newPostMusic = ' ';
            return state;
        case 'UPDATE-POST-MUSIC-TEXT-AREA':
            state.newPostMusic = action.newPostMusicServ;
            return state;
        default:
            return state;
    }
}
export const addPostMusicTextAreaActionCreator = () => ({type: ADD_POST_MUSIC_TEXT_AREA})
export const updatePostMusicTextArea = (text) => ({type: UPDATE_POST_MUSIC_TEXT_AREA, newPostMusicServ: text})

export default musicReducer;
