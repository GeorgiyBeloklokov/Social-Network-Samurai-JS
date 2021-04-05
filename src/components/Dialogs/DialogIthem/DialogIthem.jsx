import React from "react";
import f from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogIthem = (props) => {
    let path = "/dialogIthem/" + props.id;
    return <div className={f.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogIthem;
