import React from "react";
import f from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={f.headmessages}>
            <div className={f.dialogs}>
                <div className={f.dialog}>
                    Maria
                </div>
                <div className={f.dialog + ' ' + f.active}>
                    Andrey
                </div>
                <div className={f.dialog}>
                    Sergey
                </div>
                <div className={f.dialog}>
                    Alena
                </div>
                <div className={f.dialog}>
                    Lena
                </div>
                <div className={f.dialog}>
                    Tanya
                </div>
            </div>
            <div className={f.messages}>
                <div className={f.message}>
                    Hi
                </div>
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