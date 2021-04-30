const ADD_POST = 'ADD--POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inicialState = {
    posts: [
        {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
        {id: 2, message: 'hello, its my first post', likesCount: 40},
        {id: 3, message: 'balablabla', likesCount: 30},
        {id: 4, message: 'yoyoyoy', likesCount: 60},
    ],
    newPostText: 'Hello from profilePage '
};
const profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case ADD_POST:
            let text = state.newPostText
            return {
                ...state, newPostText: ' ', posts: [...state.posts, {id: 5, message: text, likesCount: 0}]
            };
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;