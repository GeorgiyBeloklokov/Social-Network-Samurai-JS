import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import NeedJob from "../../../assets/images/NeedJob.png"
import NoNeedJob from "../../../assets/images/DontNeedJob.jpeg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava1.png";

const ProfileInfo = ({isOwner,profile,status,updateStatus,savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

const onMainPhotoSelected = (e) => {
if(e.target.files.length) {
    savePhoto(e.target.files[0]);

}
}

    return (
        <div>
            {/* <div>
                <img className={s.image1}
                     src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'
                     alt=" "/>
            </div>*/}
            <div className={s.p}>
                < img className={s.img1profile}
                      src={profile.photos.large || userPhoto} alt=" "/>
                { isOwner && <input type = {"file"} onChange={onMainPhotoSelected} /> }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.z}> {'Обо мне:'} {profile.aboutMe} </div>
            <div> {'Поиск работы :'} {profile.lookingForAJob === true ? (
                    <img className={s.needjob} src={NeedJob} alt=" "/>)
                : (<img className={s.needjob} src={NoNeedJob} alt=" "/>)
            }
            </div>
        </div>

    )
}

export default ProfileInfo;