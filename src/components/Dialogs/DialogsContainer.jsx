import {addMessageAreaLeftSideActionCreator, updateTextAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        personsside: state.dialogsPage.personsside,
        messagesside: state.dialogsPage.messagesside,
        newPostMessage: state.dialogsPage.newPostMessage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addDialogPost: () => {
            dispatch(addMessageAreaLeftSideActionCreator());
        },

        updateNewPostMessage: (text) => {
            dispatch(updateTextAreaLeftSideActionCreator(text));
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;
