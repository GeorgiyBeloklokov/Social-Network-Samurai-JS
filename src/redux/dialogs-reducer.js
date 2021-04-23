const ADD_MESSAGE_AREA_LEFT_SIDE = 'ADD-MESSAGE-AREA-LEFT-SIDE';
const UPDATE_TEXT_AREA_LEFT_SIDE = 'UPDATE-TEXT-AREA-LEFT-SIDE';

 const dialogsReducer = (state, action) => {

    //message area
     switch (action.type) {
         case ADD_MESSAGE_AREA_LEFT_SIDE:
             let newwPost = {
                 id: 5,
                 message: state.newPostMessage
             };
             state.messagesside.push(newwPost);
             state.newPostMessage = ' ';
             return state;
         case UPDATE_TEXT_AREA_LEFT_SIDE:
             state.newPostMessage = action.newTextmessageArea
             return state;
         default: return state;
     }
}

export const addMessageAreaLeftSideActionCreator = () => ({type: ADD_MESSAGE_AREA_LEFT_SIDE})
export const updateTextAreaLeftSideActionCreator = (text) => ({
    type: UPDATE_TEXT_AREA_LEFT_SIDE,
    newTextmessageArea: text
})
export default dialogsReducer;