import {loginAPI} from "../api/api";

const GET_LOGIN = 'GET_LOGIN';
const DELETE_LOGIN = 'DELETE_LOGIN';

let inicialState = {
    rememberMe: false,
    id: null,
    password: ("678164566Geb"),
    login: null,
    email: ("georgiy.reus@gmail.com"),
    isFetching: 0,
    isAuth: false
};
const loginReducer = (state = inicialState, action) => {
    switch (action.type) {
        case  GET_LOGIN:
            return {
                ...state, ...action.data,
                isAuth: true
            }
            case  DELETE_LOGIN:
            return {
                ...state, ...action.data,
                isAuth: false
            }

        default:
            return state;
    }
}

export const setLoginUser = (password, email,userId,login,rememberMe) => ({type: GET_LOGIN, data: {password, email,userId,login,rememberMe}})
export const setDeleteLoginUser = (password, email,userId,login,rememberMe) => ({type: DELETE_LOGIN, data: {password, email,userId,login,rememberMe}})

export const getLoginUser = () => (dispatch) => {
    loginAPI.getLogin()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {password, email,userId,login,rememberMe} = response.data.data;
                dispatch(setLoginUser(password, email,userId,login,rememberMe));
            }
        });
}
export const deleteLoginUser = () => (dispatch) => {
    loginAPI.deleteLogin()
        .then(data => {
            if (data.resultCode === 0) {
                let {password, email,userId,login,rememberMe} = data;
                dispatch(setDeleteLoginUser(password, email,userId,login,rememberMe));
            }
        });
}

export default loginReducer;
