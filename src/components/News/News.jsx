import React from "react";
import f from "./News.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";
import {addPostNewsTextAreaActionCreator, updatePostNewsAreaActionCreator} from "../../redux/state";

const News = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);


    let newTextarea = React.createRef();

    let Add = () => {
        props.dispatch(addPostNewsTextAreaActionCreator());
        newTextarea.current.value = {onPostChange};
    }

    let onPostChange = () => {
        let text = newTextarea.current.value;
        let action = (updatePostNewsAreaActionCreator(text));
        props.dispatch(action);
    }

    return (
        <div className={f.news}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
            <div className={f.textArea}><textarea onChange={onPostChange} ref={newTextarea}
                                                  value={props.newsPost}> </textarea></div>
            <div>
                <button className={f.add} onClick={Add}>Add</button>
            </div>

        </div>
    )
}

export default News;
