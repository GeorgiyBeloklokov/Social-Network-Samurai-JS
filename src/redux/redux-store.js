import {applyMiddleware, combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer  } from "redux-form";
import loginReducer from "./login-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    usersPage: usersReducer,
    navbarPage: navbarReducer,
    auth: authReducer,
    form: formReducer,
    login:loginReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;