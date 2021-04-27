import React from "react";
import {addPostNewsTextAreaActionCreator, updatePostNewsAreaActionCreator} from "../../redux/news-reducer";
import News from "./News";
import StoreContext from "../../StoreContext";


const NewsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();


                    let addPostNewsContainer = () => {
                        store.dispatch(addPostNewsTextAreaActionCreator());

                    }

                    let onPostChange = (text) => {
                        store.dispatch(updatePostNewsAreaActionCreator(text));
                    }

                    return (<News
                        addPostNews={addPostNewsContainer} newsPost={state.newsPage.newsPost}
                        updateNewsPost={onPostChange}
                        dialogs={state.newsPage.dialogs}
                        messages={state.newsPage.messages}/>)
                }
            }
        </StoreContext.Consumer>
    )
}

export default NewsContainer;
