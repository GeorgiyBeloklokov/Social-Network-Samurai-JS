import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/Users.Container";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            < NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/dialogIthem'
                       render={() => <DialogsContainer  />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/news' render={() => <NewsContainer />}/>
                <Route path='/music' render={() => <MusicContainer />}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}
export default App;
