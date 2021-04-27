import React from "react";
import {addMessageAreaLeftSideActionCreator, updateTextAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addDialogPost = () => {
        props.store.dispatch(addMessageAreaLeftSideActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateTextAreaLeftSideActionCreator(text));
    }

    return (
        <Dialogs addDialogPost={addDialogPost} updateNewPostMessage={onPostChange} messages={state.dialogsPage.messages}
                 dialogs={state.dialogsPage.dialogs} personsside={state.dialogsPage.personsside} messagesside={state.dialogsPage.messagesside}
                 newPostMessage={state.dialogsPage.newPostMessage}/>)
}
export default DialogsContainer;
