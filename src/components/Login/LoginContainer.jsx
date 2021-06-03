import React from "react";
import {connect} from "react-redux";
import {deleteLoginUser, getLoginUser} from "../../redux/login-reducer";
import Login from "./Login";

class LoginContainer extends React.Component {

componentDidMount () {
        this.props.getLoginUser();
}

    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    rememberMe: state.login.rememberMe,
    isAuth: state.login.isAuth,
    login: state.login.login,
    email: state.login.email,
    id: state.login.id,
    password: state.login.password
});

export default connect  (mapStateToProps, {getLoginUser,deleteLoginUser})(LoginContainer)
