import {combineReducers, createStore} from "redux";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    musicPage: musicReducer
});



let store = createStore(reducers);




export default store;