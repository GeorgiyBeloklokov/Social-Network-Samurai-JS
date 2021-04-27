import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            < Navbar state={props.state.dialogsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogIthem'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/news' render={() => <NewsContainer store={props.store}/>}/>
                <Route path='/music' render={() => <MusicContainer store={props.store}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}
export default App;
