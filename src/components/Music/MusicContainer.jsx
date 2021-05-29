import {
    addPostMusicTextAreaActionCreator, updatePostMusicTextArea,
} from "../../redux/music-reducer";
import Music from "./Music";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogs: state.musicPage.dialogs,
        messages: state.musicPage.messages,
        newPostMusic: state.musicPage.newPostMusic
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostMusic: () => {
            dispatch(addPostMusicTextAreaActionCreator());
        },

        updateNewPostMusic: (text) => {
            dispatch(updatePostMusicTextArea(text));
        }
    }
}

export default compose(WithAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Music);

