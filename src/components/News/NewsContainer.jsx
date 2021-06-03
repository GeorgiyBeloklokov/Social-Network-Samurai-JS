import {addPostNewsTextAreaActionCreator} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
     dialogs: state.newsPage.dialogs,
     messages: state.newsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPostNews: (newPostTextArea) => {
            dispatch(addPostNewsTextAreaActionCreator(newPostTextArea));
        }
    }
}

export default compose (connect (mapStateToProps, mapDispatchToProps),WithAuthRedirect)(News);


