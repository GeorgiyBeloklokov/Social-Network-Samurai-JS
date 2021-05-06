import React from "react";
import f from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogIthem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div >
            <div >
                <NavLink   to={path}> {props.name} </NavLink>
            </div>
            <div>
                <img className={f.image}
                      src={props.url} alt=" "/>
            </div>
        </div>
    )
}
export default DialogIthem;
