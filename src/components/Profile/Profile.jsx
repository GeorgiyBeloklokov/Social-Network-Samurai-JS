import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
    {id: 2, message: 'hello, its my first post', likesCount: 40},
]

const Profile = () => {
    return (
        <div className={s.head}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile;