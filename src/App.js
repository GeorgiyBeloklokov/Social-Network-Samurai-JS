import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/Users.Container";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            < NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer  />}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}/>
                <Route path='/news' render={() => <NewsContainer />}/>
                <Route path='/music' render={() => <MusicContainer />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/login' render={() => <Login />}/>
            </div>
        </div>
    )
}
export default App;
