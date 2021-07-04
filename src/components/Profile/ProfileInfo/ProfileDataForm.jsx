import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../FornControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../FornControls/FormsControls.module.css";
import {Button} from "@material-ui/core";
import {Form} from "react-bootstrap";


const ProfileDataForm = ({handleSubmit,profile,error}) => {
    return <form onSubmit={handleSubmit} >
        <div><Button color="primary" variant="contained" type="submit">Save</Button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>FullName:</b> {createField("Full Name", "fullName", [], Input)}
        </div>
        <div className={s.z}>
            <b>About me: </b>
            {createField("Enter about me", "aboutMe", [], Textarea )}
        </div>

        <div><b>Looking for a job :</b>{createField("", "lookingForAJob", [], Input,{type:"checkbox"} )}
        </div>
        <div><b>My pro skills:</b> </div>
        {createField("Enter pro skills", "lookingForAJobDescription", [], Textarea )}

        <div>
            <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)} </b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;