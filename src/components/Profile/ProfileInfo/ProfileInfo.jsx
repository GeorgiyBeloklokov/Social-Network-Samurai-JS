import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import NeedJob from "../../../assets/images/NeedJob.png"
import NoNeedJob from "../../../assets/images/DontNeedJob.jpeg"

const ProfileInfo = (props) => {

    if (!props.profile ) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.image1}
                     src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'
                     alt=" "/>
            </div>
            <div className={s.p}>
                < img className={s.img1profile}
                      src={props.profile.photos.large} alt=" "/>
            </div>
            <div className={s.p}> {'Обо мне:'} {props.profile.aboutMe} </div>
            <div> { 'Поиск работы :'}  {props.profile.lookingForAJob === true ? (<img className={s.needjob} src={NeedJob} alt=" "/>)
                 : (<img className={s.needjob} src={NoNeedJob} alt=" "/>)
            }
            </div>
        </div>

    )
}


export default ProfileInfo;