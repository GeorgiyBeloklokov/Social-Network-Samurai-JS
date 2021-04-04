import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image1}
                     src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'
                     alt=" "/>
            </div>
            <div className={s.p}>
                < img className={s.img1profile}
                      src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg' alt=" "/>

            </div>
            <div className={s.p}>ava = descripcoion</div>
        </div>

    )
}
export default ProfileInfo;