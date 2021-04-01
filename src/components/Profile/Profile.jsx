import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return <div className={s.headprofile} >
        <div className={s.textprofile}>
            <div>ava = descripcoion</div>
        <MyPosts />
        </div>

    </div>

}
export default Profile;