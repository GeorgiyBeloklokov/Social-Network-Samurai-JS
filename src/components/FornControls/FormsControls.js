import React from 'react';
import styles from './FormsControls.module.css'
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, Formtype, url, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <Formtype {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}


export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
}


export const Input = (props) => {
    return <FormControl {...props} Formtype="input"></FormControl>
}

/*
const maxLength10 = maxLengthCreator(10);

export const CaptchaOne = (props) => {
    return (<div>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Your text"
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <img src={props} alt={'img'}/>
            </div>
        </div>
    )
}
<div>
    <CaptchaOne />
</div>*/
