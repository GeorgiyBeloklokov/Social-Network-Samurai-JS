import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava1.png";
import ProfileDataForm from "./ProfileDataForm";
import {Button} from "@material-ui/core";
import {InputCustom} from "../../../utils/Buttons/InputCustom";


const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            })
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.status}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.profileInfoWrapper}>

                <div className={s.pofileInfoTop}>
                    <hr/>
                    <div>
                        < img className={s.img1profile}
                              src={profile.photos.large || userPhoto} alt="img"/>
                        {isOwner && <div className={s.savefile}><InputCustom savePhoto={onMainPhotoSelected}/></div>}
                    </div>
                </div>
                <div className={s.ProfInfo}>
                    {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (

        <div>

            <div className={s.topProfileDataPartHead}>
                <div className={s.topProfileDataPart}>
                    <b>My Name:</b> {profile.fullName}
                </div>
                <div className={s.topProfileDataPart}>
                    <b>About me: </b> {profile.aboutMe}
                </div>

                <div className={s.topProfileDataPart}><b>Looking for a job :</b>{profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob &&
                <div className={s.topProfileDataPart}><b>Descripcion:</b> {profile.lookingForAJobDescription}</div>
                }
            </div>

            <div className={s.contactFirstFormHead}>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
            <div className={s.buttonForma}>
                {isOwner && <div><Button style={{
                    maxWidth: '5.8rem',
                    maxHeight: '1.5rem',
                    minWidth: '2.4rem',
                    minHeight: '1rem',
                    fontSize: '0.5rem',
                    textAlign: 'center'
                }} color="primary" variant="contained" onClick={goToEditMode}>Edit</Button></div>}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <div className={s.contactsFirstForm}><b>{contactTitle}</b> : {contactValue} </div>
        </div>
    )
}

export default ProfileInfo;
