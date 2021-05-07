import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";


class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.AddDialogPost = () => {
            props.addDialogPost();
        }

        this.onPostChange = (e) => {
            let text = e.target.value;
            props.updateNewPostMessage(text);
        }
    }

    render() {
        this.dialogsElements = this.props.dialogs
            .map(z => <DialogIthem url={z.url} key={z.id} name={z.name} id={z.id}/>);
        this.dialogsElementsRightSide = this.props.personsside
            .map(z => <DialogIthem url={z.url} key={z.id} name={z.name} id={z.id}/>);

        this.messagesElements = this.props.messages
            .map(m => <Message key={m.id} message={m.message}/>);
        this.messagesElementsRightSide = this.props.messagesside
            .map(m => <Message key={m.id} messagesside={m.message}/>);
        return (
            <div>

                <div className={f.dialogs}>
                    <div className={f.dialogIthem}>
                        {this.dialogsElements}
                    </div>
                    <div>
                        {this.messagesElements}
                    </div>
                </div>
                <div className={f.rightside}>
                    <div>
                        {this.dialogsElementsRightSide}
                    </div>
                    <div>
                        {this.messagesElementsRightSide}
                    </div>
                    <div>
                        < textarea onChange={this.onPostChange} value={this.props.newPostMessage}> </textarea>
                    </div>
                    <div>
                        <button onClick={this.AddDialogPost}>Add</button>
                    </div>
                </div>
            </div>
        )

    }
}
export default Dialogs;
