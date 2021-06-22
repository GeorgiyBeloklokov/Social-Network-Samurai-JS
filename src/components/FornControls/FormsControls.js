import React from 'react';
import styles from './FormsControls.module.css'
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





export const createField = (placeholder, name, validators, component, props = {} , text = "" ) => (

            <div>
                <Field placeholder={placeholder} name={name}
                validate={validators}
                 component = {component}
                 {...props}
                 /> {text}
            </div>
)

