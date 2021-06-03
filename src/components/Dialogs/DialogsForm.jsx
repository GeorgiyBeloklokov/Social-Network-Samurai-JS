import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../FornControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const maxLength10 =  maxLengthCreator(10);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Your text" validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default  reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)
