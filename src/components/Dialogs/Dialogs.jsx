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


const Dialogs = () => {
    return (
        <div className={f.dialogs}>
            <div className={f.dialogIthem}>
                <DialogIthem name="Maria" id="1"/>
                <DialogIthem name="Andrey" id="2"/>
                <DialogIthem name="Sergey" id="3"/>
                <DialogIthem name="Alena" id="4"/>
                <DialogIthem name="Lena" id="5"/>
                <DialogIthem name="Tanya" id="6"/>
            </div>
            <div className={f.messageIthem}>
                <Message message="hello"/>
                <Message message="i m fine"/>
                <Message message="how are yoy"/>
            </div>

        </div>

    )
}

export default Dialogs;