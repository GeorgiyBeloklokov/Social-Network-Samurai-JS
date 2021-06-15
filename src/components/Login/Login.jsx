import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FornControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../FornControls/FormsControls.module.css"

const LoginForm = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder="Email" name="email" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" type={"password"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox"/> Remember me
            </div>
            {error && <div className={style.formSummaryError}>{error}
            </div>}
            {/*<div>
                <Field component={CaptchaOne} name="captcha" type="captcha" />
            </div>*/}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>

    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
