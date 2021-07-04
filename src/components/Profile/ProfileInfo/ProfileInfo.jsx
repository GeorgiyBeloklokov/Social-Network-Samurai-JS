import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava1.png";
import ProfileDataForm from "./ProfileDataForm";
import {Button, Input, TextField} from "@material-ui/core";
import {findAllByDisplayValue} from "@testing-library/react";
import profileCard from "./ProfileCard";
import ProfileCard from "./ProfileCard";
import MaterialUiForm from "../../Login/Login2";
import {InputCustom} from "../../Header/InputCustom";




const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto,saveProfile}) => {

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
        <div>
             {/*<div>
                <img className={s.image1}
                     src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'
                     alt=" "/>
            </div>*/}
            <div>
                {/*<ProfileCard />*/}
                {/*<MaterialUiForm />*/}
            </div>
            <div className={s.p}>
                < img className={s.img1profile}
                      src={profile.photos.large || userPhoto} alt="img"/>
                {isOwner && <div>{/*<Input  className={s.input} type={"file"}  onChange={onMainPhotoSelected}/>*/}<InputCustom savePhoto={onMainPhotoSelected} /></div>}
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

            { editMode ? <ProfileDataForm initialValues={profile}  profile={profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
        </div>

    )
}

const ProfileData = ({profile,isOwner,goToEditMode}) => {
    return <div className={s.formaprof}>
        {isOwner && <div><Button color="primary" variant="contained" onClick={goToEditMode}>Edit</Button></div>}
        <div>
            <b>FullName:</b> {profile.fullName}
        </div>
        <div className={s.z}>
            <b>About me: </b> {profile.aboutMe}
        </div>

        <div><b>Looking for a job :</b>{profile.lookingForAJob ? "yes" : "no" }
        </div>
        {profile.lookingForAJob &&
        <div><b>Descripcion:</b> {profile.lookingForAJobDescription}</div>
        }
        <div>
            <b> Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b> : {contactValue} </div>
}
export default ProfileInfo;