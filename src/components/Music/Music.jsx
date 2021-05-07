import React from "react";
import f from "./Music.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.Add = () => {
            this.props.addPostMusic();
        }

        this.onPostChange = (element) => {
            let text = element.target.value;
            this.props.updateNewPostMusic(text);
        }
    }

    render() {
        this.dialogsElements = this.props.dialogs
            .map(d => <DialogIthem url={d.url} name={d.name} key={d.id} id={d.id}/>);

        this.messagesElements = this.props.messages
            .map(m => <Message message={m.message}/>);
        return (
            <div className={f.music}>
                <div>{this.dialogsElements}</div>
                <div>{this.messagesElements}</div>
                <div className={f.textArea}><textarea onChange={this.onPostChange}
                                                      value={this.props.newPostMusic}> </textarea></div>
                <div>
                    <button className={f.add} onClick={this.Add}>Add</button>
                </div>

            </div>
        )
    }

}

export default Music;
