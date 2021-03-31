import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContentBody from "./components/ContentBody";
/*import Profile from "./components/Profile";*/


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <ContentBody/>
            {/*<Profile/>*/}
        </div>
    );
}

export default App;
