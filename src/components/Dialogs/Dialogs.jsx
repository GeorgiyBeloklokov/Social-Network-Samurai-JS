import React from "react";
import f from "./Dialogs.module.css";
import DialogIthem from "./DialogIthem/DialogIthem";
import Message from "./Message/Message";
import AddMessageForm from "./DialogsForm";

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
        this.AddDialogPost = (values) => {
            props.sendDialogPost(values.newMessageBody);
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
                    <AddMessageForm onSubmit={this.AddDialogPost} />
                </div>
            </div>
        )
    }
}





export default Dialogs;
