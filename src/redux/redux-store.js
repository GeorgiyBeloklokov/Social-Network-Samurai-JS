import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    navbarPage: navbarReducer
});



let store = createStore(reducers);




export default store;