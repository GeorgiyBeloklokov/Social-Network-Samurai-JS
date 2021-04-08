import React from "react";
import f from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import d from "../../Profile/MyPosts/Post/Post.module.css";

const DialogIthem = (props) => {
    let path = "/dialogIthem/" + props.id;
    let avatarMessages = (props) => {
        return (
        <div>
            < img className={d.image}
                  src={props.url} alt=" "/>
        </div>
        )
    }
    return <div className={f.dialog}>
        <NavLink to={path}>{props.name + avatarMessages } </NavLink>
    </div>
}


export default DialogIthem;
