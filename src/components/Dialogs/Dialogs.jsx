import React from "react";
import f from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={f.headDialogs}>
            <div className={f.dialogs}>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/1"> Maria</NavLink>
                </div>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/3">Sergey</NavLink>
                </div>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/4">Alena</NavLink>
                </div>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/5">Lena</NavLink>
                </div>
                <div className={f.dialog}>
                    <NavLink to="/dialogs/6">Tanya</NavLink>
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