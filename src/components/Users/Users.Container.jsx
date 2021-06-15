import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollow,
    toggleFollowingProgress,
    getUsers
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import Paginator from "../Paginator/Paginator";

class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Paginator totalItemsCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} />

            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} toggleFollowingProgress={this.props.toggleFollowingProgress}
                   onPageChanged={this.onPageChanged} users={this.props.users} toggleFollow={this.props.toggleFollow}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(WithAuthRedirect, connect(mapStateToProps, {
    toggleFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}))(UsersContainer);



