import React from "react";
import {
    addPostMusicTextAreaActionCreator, updatePostMusicTextArea,
} from "../../redux/music-reducer";
import Music from "./Music";
import StoreContext from "../../StoreContext";

const MusicContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let Add = () => {
                        store.dispatch(addPostMusicTextAreaActionCreator());
                    }

                    let onPostChange = (text) => {
                        store.dispatch(updatePostMusicTextArea(text));
                    }

                    return (
                        <Music addPostMusic={Add} updateNewPostMusic={onPostChange} dialogs={state.musicPage.dialogs}
                               messages={state.musicPage.messages} newPostMusic={state.musicPage.newPostMusic}/>)

                }
            }
        </StoreContext.Consumer>
    )
}

export default MusicContainer;
