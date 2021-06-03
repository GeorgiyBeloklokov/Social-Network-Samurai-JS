import {addMessageAreaLeftSideActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        personsside: state.dialogsPage.personsside,
        messagesside: state.dialogsPage.messagesside
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendDialogPost: (newMessageBody) => {
            dispatch(addMessageAreaLeftSideActionCreator(newMessageBody));
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);


