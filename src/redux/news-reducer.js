const ADD_POST_NEWS_TEXT_AREA = 'ADD-POST-NEWS-AREA';
const UPDATE_POST_NEWS_TEXT_AREA = 'UPDATE-POST-NEWS-AREA';

const newsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST_NEWS_TEXT_AREA:
            let newsPostserv = {
                id: 5,
                message: state.newsPost
            };
            state.messages.push(newsPostserv);
            state.messages.newsPost = ' ';
            return state;
        case UPDATE_POST_NEWS_TEXT_AREA:
            state.newsPost = action.newsPostservis;
            return state;
        default:
            return state;
    }
}
export const addPostNewsTextAreaActionCreator = () => ({type: ADD_POST_NEWS_TEXT_AREA})
export const updatePostNewsAreaActionCreator = (text) => ({type: UPDATE_POST_NEWS_TEXT_AREA, newsPostservis: text})


export default newsReducer;
