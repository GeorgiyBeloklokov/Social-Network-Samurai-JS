import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ContentBody from "./components/ContentBody/ContentBody";



const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <ContentBody/>
        </div>
    );
}

export default App;
