import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.head}>
            <ProfileInfo profile = {props.profile} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;
