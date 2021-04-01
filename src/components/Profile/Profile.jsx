import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.headprofile} >
        <div>
            < img className={s.img1profile} src='https://universalnews.org/wp-content/uploads/2020/05/Facebook-Avatar.jpg' alt = " "/>

        </div>
        <div className={s.textprofile}>
            <div className={s.ithem} >ava = descripcoion</div>
        <MyPosts />
        </div>

    </div>

}
export default Profile;