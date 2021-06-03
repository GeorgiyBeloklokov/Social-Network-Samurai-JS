import React from "react";
import f from "./Music.module.css";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import Message from "../Dialogs/Message/Message";
import MusTextArea from "./MusicForm";

class Music extends React.Component {
    constructor(props) {
        super(props);

        this.AddMusicTextArea = (values) => {
            this.props.addPostMusic(values.newMusicTextArea);
        }
    }

    render() {
        this.dialogsElements = this.props.dialogs
            .map(d => <DialogIthem url={d.url} name={d.name} key={d.id} id={d.id}/>);

        this.messagesElements = this.props.messages
            .map(m => <Message message={m.message} key={m.id}/>);

        return (
            <div className={f.music}>
                <div>{this.dialogsElements}</div>
                <div>{this.messagesElements}</div>
                <MusTextArea onSubmit={this.AddMusicTextArea}/>
            </div>
        )
    }
}

export default Music;
