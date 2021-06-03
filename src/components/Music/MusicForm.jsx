import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../FornControls/FormsControls";

const maxLength10 =  maxLengthCreator(10);

const MusTextArea = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMusicTextArea" placeholder="Your Text" validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    )
}

export default reduxForm({form: "musictextareaform"})(MusTextArea)