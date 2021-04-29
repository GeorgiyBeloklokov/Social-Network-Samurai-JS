
import {addMessageAreaLeftSideActionCreator, updateTextAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
