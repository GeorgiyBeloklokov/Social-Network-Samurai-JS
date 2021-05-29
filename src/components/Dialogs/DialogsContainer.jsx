import {addMessageAreaLeftSideActionCreator, updateTextAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

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


export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);


