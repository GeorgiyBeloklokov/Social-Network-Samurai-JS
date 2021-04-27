import React from "react";
import f from "./Music.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";

const Music = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>);

    let Add = (e) => {
        props.addPostMusic();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostMusic(text);
    }

    return (
        <div className={f.music}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
            <div className={f.textArea}><textarea onChange={onPostChange}
                                                  value={props.newPostMusic}> </textarea></div>
            <div>
                <button className={f.add} onClick={Add}>Add</button>
            </div>

        </div>
    )
}
export default Music;
