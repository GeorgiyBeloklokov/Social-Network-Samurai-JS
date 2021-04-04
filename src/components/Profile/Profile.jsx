import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.image1}
                     src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg'
                     alt=" "/>
            </div>
            <div className={s.headprofile}>
                <MyPosts/>
            </div>
        </div>

    )
}
export default Profile;