import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            < Navbar state={props.state.dialogsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogIthem'
                       render={() => <Dialogs state={props.state.dialogsPage}
                                              dispatch={props.store.dispatch.bind(props.store)}
                                              newPostMessage={props.state.dialogsPage.newPostMessage}/>}/>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage}
                                              dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path='/news' render={() => <News state={props.state.newsPage}
                                                        dispatch={props.store.dispatch.bind(props.store)}
                                                        newsPost={props.state.newsPage.newsPost}/>}/>
                <Route path='/music' render={() => <Music state={props.state.musicPage}
                                                          dispatch={props.store.dispatch.bind(props.store)}
                                                          newPostMusic={props.state.musicPage.newPostMusic}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}
export default App;
