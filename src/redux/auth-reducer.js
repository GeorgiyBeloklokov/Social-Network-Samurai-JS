import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let inicialState = {
    id: null,
    login: null,
    email: null,
    isFetching: 0,
    isAuth: false,
    url: null
}
const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth, url) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth, url}
})



export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else{
                let message = response.data.messages.length > 0 ? response.data.messages[0]: "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false,));
            }
        });
}
/*export const captcha = () => (dispatch) => {
    authAPI.captcha()
        .then(response => {
            let url = response.data.url;
            dispatch(CaptchaOne(url));

        });
}*/

export default authReducer;