import Users from "./Users";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux/users-reducer";
import {toggleFollow} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userID) => {
            dispatch(toggleFollow(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
