import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";

import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/Users.Container";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount () {
        this.props.initializeApp ();
    }

    render() {
        if(!this.props.initialized){
        return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                < NavbarContainer/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    </React.Suspense>
                    <Route path='/news' render={() => <NewsContainer/>}/>
                    <Route path='/music' render={() => <MusicContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    initialized: state.app.initialized

})

export default connect  (mapStateToProps, {initializeApp})(App);
