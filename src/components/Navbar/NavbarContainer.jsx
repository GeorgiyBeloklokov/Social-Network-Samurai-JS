import React from "react";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
         friendsNavbarFooter: () =>
            state.dialogsPage.dialogs.slice(0, 3)
                .map(d => <DialogIthem id={d.id} key={d.id} name={d.name} url={d.url}/>)

        }
    }


const NavbarContainer = connect (mapStateToProps)(Navbar);

export default NavbarContainer;
