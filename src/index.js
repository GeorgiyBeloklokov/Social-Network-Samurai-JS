import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

let _callSubscriber = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} state={store.getState()}/>
        </BrowserRouter>,
        document.getElementById('root'));
}
_callSubscriber(store.getState());
store.subscribe(_callSubscriber);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

