const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let inicialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    newPostText: 'Hello from profilePage '
};
const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed:!u.followed}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        default:
            return state;
    }
}

export const toggleFollow = (userID) => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export default usersReducer;