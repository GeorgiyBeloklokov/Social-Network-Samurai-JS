import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, renderTextField, Textarea} from "../../FornControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../FornControls/FormsControls.module.css";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.profileDataFormHead}>
        <div className={s.topProfileDataPartHeadtwo}>
            <div>
                <b>My Name:</b> {createField("Full Name", "fullName", [], renderTextField)}
            </div>
            <div className={s.z}>
                <b>About me: </b>
                {createField("Enter about me", "aboutMe", [], renderTextField)}
            </div>

            <div><b>Looking for a job :</b>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div><b>My pro skills:</b></div>
            {createField("Enter pro skills", "lookingForAJobDescription", [], renderTextField)}
        </div>

        <div className={s.contactFirstFormHeadTwo}>
            <b> Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key, "contacts." + key, [], renderTextField)} </b>
            </div>

        })}
        </div>
        </div>
        <div className={s.buttonsProfileDataForm}>
        <div><Button style={{
            maxWidth: '5.8rem',
            maxHeight: '1.5rem',
            minWidth: '2.4rem',
            minHeight: '1rem',
            fontSize: '0.5rem',
            textAlign: 'center'
        }} className={s.buttonFormaEditMode} color="primary" variant="contained" type="submit">Save</Button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <Button style={{
                maxWidth: '5.8rem',
                maxHeight: '1.5rem',
                minWidth: '2.4rem',
                minHeight: '1rem',
                fontSize: '0.5rem',
                textAlign: 'center'
            }} className={s.buttonFormaEditMode} color="primary" variant="contained" type="submit" onClick={()=><NavLink to={'/profile'}/>}  >Dont Save</Button>
        </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
