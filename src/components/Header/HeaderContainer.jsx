import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

componentDidMount () {
    authAPI.me()
        .then(response => {
if (response.data.resultCode ===0) {
    let {id, login, email } = response.data.data;
    this.props.setAuthUserData (id, login, email);
}

    });
}
    render() {

        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email,
    id: state.auth.id

});

export default connect  (mapStateToProps, {setAuthUserData})(HeaderContainer)