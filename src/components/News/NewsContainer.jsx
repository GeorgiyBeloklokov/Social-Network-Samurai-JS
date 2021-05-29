
import {addPostNewsTextAreaActionCreator, updatePostNewsAreaActionCreator} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


let mapStateToProps = (state) => {
    return {
     dialogs: state.newsPage.dialogs,
     messages: state.newsPage.messages,
        newsPost: state.newsPage.newsPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostNews: () => {
            dispatch(addPostNewsTextAreaActionCreator());
        },
        updateNewsPost: (text) => {
            dispatch(updatePostNewsAreaActionCreator(text));

        }
    }
}

export default compose (WithAuthRedirect,connect (mapStateToProps, mapDispatchToProps))(News);


