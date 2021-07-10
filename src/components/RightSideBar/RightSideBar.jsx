import React from "react";
import s from "./RightSideBar.module.css";
import {NavLink} from "react-router-dom";


const RightsideBar = () => {
    return (
<div className={s.rsidebar}>


    <div  className={s.itHem}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>


</div>

    )
}


export default RightsideBar;

