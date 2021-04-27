import React from "react";
import {addPostNewsTextAreaActionCreator, updatePostNewsAreaActionCreator} from "../../redux/news-reducer";
import News from "./News";


const NewsContainer = (props) => {

    let state = props.store.getState();

    let addPostNewsContainer = () => {
        props.store.dispatch(addPostNewsTextAreaActionCreator());

    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostNewsAreaActionCreator(text));
    }

    return (<News
            addPostNews={addPostNewsContainer} newsPost={state.newsPage.newsPost} updateNewsPost={onPostChange}
            dialogs={state.newsPage.dialogs}
            messages={state.newsPage.messages}/>
    )
}

export default NewsContainer;
