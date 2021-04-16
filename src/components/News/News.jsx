import React from "react";
import f from "./News.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";

const News = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);


    let newTextarea = React.createRef();

    let Add = () => {
        props.addPostNewsNextArea();
        newTextarea.current.value = {onPostChange};
    }
let onPostChange =()=> {
        let text = newTextarea.current.value;
        props.updatePostNewsArea(text);
}

    return (
        <div className={f.news}>
            <div className={f.newsDailogs}>{dialogsElements}</div>
             <div className={f.newsMessages}>{messagesElements}</div>
            <div className={f.textAtea}><textarea onChange={onPostChange} ref={newTextarea} value={props.newsPost}> </textarea></div>
            <div>
                <button className={f.add} onClick={Add}>Add</button>
            </div>

        </div>
    )
}

export default News;