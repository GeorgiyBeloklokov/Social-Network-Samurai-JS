import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
            <div className={s.ithem}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.ithem}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.ithem}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.ithem}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.ithem}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </div>
        </nav>
    )
}
export default Navbar;
