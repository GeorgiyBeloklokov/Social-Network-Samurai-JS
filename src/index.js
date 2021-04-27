import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

let callSubscriber = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value = {store}>
                <App store={store} state={state} dispatch={store.dispatch.bind(store)}/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}
callSubscriber(store.getState());
store.subscribe(() => {
    let state = store.getState()
    callSubscriber(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

