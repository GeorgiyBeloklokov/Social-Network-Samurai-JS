import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return <nav className='nav'>
        <ul>
            <li className= 'ithem' >Profile</li>
            <li className= 'ithem' >Messages</li>
            <li className= 'ithem' >News</li>
            <li className= 'ithem' >Music</li>
        </ul>
    </nav>
}
export default Navbar;