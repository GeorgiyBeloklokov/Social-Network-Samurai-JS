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
                <Message />
                <div className={f.message}>
                    How are you
                </div>
                <div className={f.message}>
                    oh okkkay
                </div>
                <div className={f.message}>
                    he gys how are you
                </div>
                <div className={f.message}>
                    Fineee
                </div>
                <div className={f.message}>
                    Goood
                </div>
            </div>

        </div>

    )
}

export default Dialogs;