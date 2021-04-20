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
                < Navbar state = {props.state.dialogsPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogIthem'
                           render={() => <Dialogs state={props.state.dialogsPage}
                                                  addMessageAreaLeftSide={props.store.addMessageAreaLeftSide.bind(props.store)}
                                                  newPostMessage={props.state.dialogsPage.newPostMessage}
                                                  updatetextAreaLeftSide={props.store.updatetextAreaLeftSide.bind(props.store)}/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage}
                                                  updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                  addPost={props.store.addPost.bind(props.store)}/>}/>
                    <Route path='/news' render={() => <News state={props.state.dialogsPage}
                                                            newsPost={props.state.dialogsPage.newsPost}
                                                            addPostNewsNextArea={props.store.addPostNewsTextArea.bind(props.store)}
                                                            updatePostNewsArea={props.store.updatePostNewsArea.bind(props.store)}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        )
}
export default App;
