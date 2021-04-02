import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
    return <nav className={s.nav}>
        <ul>
            <li className={s.ithem}>Profile</li>
            <li className={s.ithem}>Messages</li>
            <li className={s.ithem}>News</li>
            <li className={s.ithem}>Music</li>
        </ul>
    </nav>
}
export default Navbar;
