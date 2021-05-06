import React from "react";
import f from "./News.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";

const News = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>);

    let addPostNews = () => {
        props.addPostNews();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewsPost(text);
    }
    return (
        <div className={f.news}>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
            <div className={f.textArea}><textarea onChange={onPostChange}
                                                  value={props.newsPost}> </textarea></div>
            <div>
                <button className={f.add} onClick={addPostNews}>Add</button>
            </div>

        </div>
    )
}
export default News;
