import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
            <li className={s.ithem}>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li className={s.ithem}>
                <NavLink to="/dialogs">Messages</NavLink>
            </li>
            <li className={s.ithem}>
                <NavLink to="/news">News</NavLink>
            </li>
            <li className={s.ithem}>
                <NavLink to="/music">Music</NavLink>
            </li>
            <li className={s.ithem}>
                <NavLink to="/settings">Settings</NavLink>
            </li>
            </ul>
        </nav>
    )
}
export default Navbar;
