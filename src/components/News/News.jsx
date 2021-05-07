import React from "react";
import f from "./News.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.addPostNews = () => {
            props.addPostNews();
        }
        this.onPostChange = (e) => {
            let text = e.target.value;
            this.props.updateNewsPost(text);
        }
    }

    render() {
        this.dialogsElements = this.props.dialogs
            .map(d => <DialogIthem url={d.url} name={d.name} key={d.id} id={d.id}/>);

        this.messagesElements = this.props.messages
            .map(m => <Message message={m.message} key={(m.id)}/>);
        return (
            <div className={f.news}>
                <div>{this.dialogsElements}</div>
                <div>{this.messagesElements}</div>
                <div className={f.textArea}><textarea onChange={this.onPostChange}
                                                      value={this.props.newsPost}> </textarea></div>
                <div>
                    <button className={f.add} onClick={this.addPostNews}>Add</button>
                </div>

            </div>
        )
    }
}

export default News;
