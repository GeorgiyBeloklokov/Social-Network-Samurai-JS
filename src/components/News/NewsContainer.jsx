
import {addPostNewsTextAreaActionCreator, updatePostNewsAreaActionCreator} from "../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";


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

const NewsContainer = connect (mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
