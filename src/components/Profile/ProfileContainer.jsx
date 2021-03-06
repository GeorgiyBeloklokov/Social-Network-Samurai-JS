import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component {
    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.match.params.userId !== prevProps.match.params.userId) {
                this.refreshProfile()
            }
        }

    render() {
        return (
            <Profile {...this.props} isOwner = {!this.props.match.params.userId } savePhoto={this.props.savePhoto} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(WithAuthRedirect,connect(mapStateToProps, {
    getUserProfile,
    getStatus,savePhoto,
    saveProfile,
    updateStatus
}), withRouter)(ProfileContainer);

