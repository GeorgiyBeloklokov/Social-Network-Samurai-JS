import React from "react";
import b from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={b.header}>
        <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' alt=" "/>

        <div className={b.loginBlock}>
            {props.isAuth ? props.login
        : <NavLink to={'/login'}><button className={b.but} >Login</button></NavLink>
            }

        </div>


    </header>
}
export default Header;