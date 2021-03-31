import React from "react";
import "./Profile.css";


const Profile = () => {
    return <div className='headprofile'>
        <div className='img1profile'>
            <img src='data:image/jpeg;base64,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' alt=" "/>
        </div>
        <div className='textprofile'>
            <div className="avabody">ava = descripcoion</div>
            <div className="mypostbody">my post</div>
            <div className="newpostbody">new post</div>
            <div className="post1body">post 1</div>
            <div className="post2body">post 2</div>
        </div>

    </div>

}
export default Profile;