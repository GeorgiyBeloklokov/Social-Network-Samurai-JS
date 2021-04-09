import React from "react";
import f from "./../Dialogs.module.css";

const Message = (props) => {
    return <div className={f.messages}>{props.message} {props.messagesside}</div>
}
export default Message;
