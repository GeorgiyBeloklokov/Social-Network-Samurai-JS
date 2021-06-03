import {addPostMusicTextAreaActionCreator,} from "../../redux/music-reducer";
import Music from "./Music";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogs: state.musicPage.dialogs,
        messages: state.musicPage.messages
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostMusic: (newMusicTextArea) => {
            dispatch(addPostMusicTextAreaActionCreator(newMusicTextArea));
        }
    }
}

export default compose(WithAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Music);

