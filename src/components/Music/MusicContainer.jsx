import React from "react";
import {
    addPostMusicTextAreaActionCreator, updatePostMusicTextArea,
} from "../../redux/music-reducer";
import Music from "./Music";

const MusicContainer = (props) => {
    let state = props.store.getState();

    let Add = () => {
        props.store.dispatch(addPostMusicTextAreaActionCreator());

    }

    let onPostChange = (text) => {
        props.store.dispatch(updatePostMusicTextArea(text));
    }

    return (
        <Music addPostMusic={Add} updateNewPostMusic={onPostChange} dialogs={state.musicPage.dialogs}
               messages={state.musicPage.messages} newPostMusic={state.musicPage.newPostMusic}/>
    )
}

export default MusicContainer;
