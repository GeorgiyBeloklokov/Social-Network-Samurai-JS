import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";


let dialogs = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Lena'},
    {id: 6, name: 'Tanya'},
]
let messages = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'im fine'},
    {id: 3, message: 'how are you'},
]
let dialogsElements = dialogs
    .map(d => <DialogIthem name={d.name} id={d.id}/> );

let messagesElements = messages
    .map(m => <Message message={m.message} />

    )
const Dialogs = () => {
    return (
        <div className={f.dialogs}>
            <div className={f.dialogIthem}>
                { dialogsElements }

            </div>
            <div className={f.messageIthem}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
