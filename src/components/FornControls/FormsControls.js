import React from 'react';
import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import TextField from "@material-ui/core/TextField";
import {Checkbox, FormControlLabel} from "@material-ui/core";



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

export const renderTextField = ({label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

export const renderCheckbox = ({ input, label }) => (
    <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={input.value ? true : false}
                    onChange={input.onChange}
                />
            }
            label={label}
        />
    </div>
)

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

