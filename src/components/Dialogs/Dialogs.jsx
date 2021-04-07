import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs
        .map(d => <DialogIthem name={d.name} id={d.id}/>);

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={f.dialogs}>
            <div className={f.dialogIthem}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
