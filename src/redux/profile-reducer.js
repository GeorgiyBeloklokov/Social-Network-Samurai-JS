const ADD_POST = 'ADD--POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inicialState  = {
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
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state}; //create shallow copy
            stateCopy.posts = [...state.posts]; // create deep copy in state.posts
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ' ';
            return stateCopy;                // return copy of state!
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};// create shalllow copy
            stateCopy.newPostText = action.newText; //dont need copy posts  because no needing reescribe dom
            return stateCopy;       // return copy of state!
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;