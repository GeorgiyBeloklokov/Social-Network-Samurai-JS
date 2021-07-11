import React from "react";
import f from "./News.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";
import FetchDataFromRSSFeed from "../Rss/Rss";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.addPostNews = (values) => {
            props.addNewPostNews(values.newPostTextArea);
        }
    }

    render() {
        this.dialogsElements = this.props.dialogs
            .map(d => <DialogIthem url={d.url} name={d.name} key={d.id} id={d.id}/>);

        this.messagesElements = this.props.messages
            .map(m => <Message message={m.message} key={(m.id)}/>);
        return (
            <div className={f.news}>
                {/*<div>{this.dialogsElements}</div>
                <div>{this.messagesElements}</div>
                <NewsTextArea onSubmit={this.addPostNews}/>*/}
                <FetchDataFromRSSFeed />
            </div>

        )
    }
}

export default News;
