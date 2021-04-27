import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);
    let dialogsElementsRightSide = props.personsside
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements = props.messages
        .map(m => <Message message={m.message}/>);
    let messagesElementsRightSide = props.messagesside
        .map(m => <Message messagesside={m.message}/>);



    let AddDialogPost = () => {
        props.addDialogPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostMessage(text) ;
    }

    return (
        <div>

            <div className={f.dialogs}>
                <div className={f.dialogIthem}>
                    {dialogsElements}
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
            <div className={f.rightside}>
                <div>
                    {dialogsElementsRightSide}
                </div>
                <div>
                    {messagesElementsRightSide}
                </div>
                <div>
                    < textarea onChange={onPostChange} value={props.newPostMessage}> </textarea>
                </div>
                <div>
                    <button onClick={AddDialogPost}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
