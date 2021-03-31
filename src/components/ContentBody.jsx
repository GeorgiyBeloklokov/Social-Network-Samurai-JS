import React from "react";
import z from "./ContentBody.module.css";
import "./Profile";
import Profile from "./Profile";


const ContentBody = () => {
    return  <div className={z.contentbody1}>
        <div >
            <img className={z.image1} src='https://fainaidea.com/wp-content/uploads/2020/05/f8a4c90d00ce2e5684c3bf47c4a6ce17.jpg' alt=" "/>

        </div>
        <Profile />

    </div>
}
export default ContentBody;