import React from "react";
import {addMessageAreaLeftSideActionCreator, updateTextAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addDialogPost = () => {
                        store.dispatch(addMessageAreaLeftSideActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updateTextAreaLeftSideActionCreator(text));
                    }

                    return (
                        <Dialogs addDialogPost={addDialogPost} updateNewPostMessage={onPostChange}
                                 messages={state.dialogsPage.messages}
                                 dialogs={state.dialogsPage.dialogs} personsside={state.dialogsPage.personsside}
                                 messagesside={state.dialogsPage.messagesside}
                                 newPostMessage={state.dialogsPage.newPostMessage}/>)
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;
