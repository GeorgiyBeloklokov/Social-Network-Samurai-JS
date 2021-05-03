const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let inicialState = {
    users: [
        {id: 1, photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg', followed: false, Name: 'Sergey', status: 'I am a mayor', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg', followed: true, Name: 'Jhon', status: 'I am a worker', location: {city: 'NY', country: 'USA'}},
        {id: 3, photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg', followed: false, Name: 'Michael', status: 'I am a driver', location: {city: 'London', country: 'UK'}},
        {id: 4, photoURL: 'https://i.pinimg.com/originals/fb/69/f5/fb69f585a76222761c2c7103f386c1fb.jpg', followed: true, Name: 'Antony', status: 'I am a master', location: {city: 'Jersey', country: 'USA'}},
    ],
    newPostText: 'Hello from profilePage '
};
const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;