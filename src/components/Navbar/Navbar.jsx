import React from "react";
import s from "./Navbar.module.css";
/*import {BrowserRouter, Route} from "react-router-dom";*/


const Navbar = () => {
    return (
        /*<BrowserRouter>*/
    <nav className={s.nav}>
        {/*<Route path="/profile" component= {Profile}/>
        <Route path="/dialogs" component= {Messages}/>*/}
        <div className={s.ithem}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.ithem}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.ithem}>
                <a href="/news">News</a>
                </div>
            <div className={s.ithem}>
                <a href="/music">Music</a>
            </div>
            <div className={s.ithem}>
                <a href="/settings">Settings</a>
            </div>
    </nav>

        /*</BrowserRouter>*/
    )
}
export default Navbar;
