import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";
const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);
    let dialogsElementsRightSide = props.state.personsside
        .map(d => <DialogIthem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message}/>);
    let messagesElementsRightSide = props.state.messagesside
        .map(m => <Message messagesside={m.message}/>);


    let Add = () => {
        props.addMessageAreaLeftSide();
        textSecondArea.current.value = {onPostChange};
    }

    let textSecondArea = React.createRef();

    let onPostChange = () => {
        let text = textSecondArea.current.value;
        props.updatetextAreaLeftSide(text);
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
                    < textarea onChange={onPostChange} ref={textSecondArea} value={props.newPostMessage}> </textarea>
                </div>
                <div>
                    <button onClick={Add}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
