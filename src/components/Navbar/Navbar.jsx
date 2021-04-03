import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.heaDitHem + ' ' + s.active}>
            <div className={s.itHem}>
                <NavLink to="/profile" >Profile</NavLink>
            </div>
            <div className={s.itHem}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.itHem} >
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.itHem}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.itHem}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
        </nav>
    )
}
export default Navbar;
