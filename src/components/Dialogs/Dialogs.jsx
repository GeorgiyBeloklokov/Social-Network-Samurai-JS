import React from "react";
import f from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogIthem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={f.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={f.message}>{props.message}</div>
}

let dialogsData = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Lena'},
    {id: 6, name: 'Tanya'},
]

let messagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'im fine'},
    {id: 3, message: 'how are you'},
]
const Dialogs = () => {
    return (
        <div className={f.dialogs}>
            <div className={f.dialogIthem}>
                <DialogIthem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogIthem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogIthem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogIthem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogIthem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogIthem name={dialogsData[5].name} id={dialogsData[5].id}/>

            </div>
            <div className={f.messageIthem}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    )
}

export default Dialogs;