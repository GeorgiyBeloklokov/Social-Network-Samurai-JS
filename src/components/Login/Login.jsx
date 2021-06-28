import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../FornControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../FornControls/FormsControls.module.css";
import {Button,Container,Row,Col} from "react-bootstrap";


const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField ("Email", "email",[required], Input )}
            {createField ("Password","password",[required], Input, {type:"password"})}
            {createField( null, "rememberme",[],Input, {type:"checkbox"},"remember me"    )}
            {captchaUrl && <img src={captchaUrl} alt={"img"}/> }
            {captchaUrl && createField( "Enter symbols from image", "captcha", [required], Input, {} ) }
            {error && <div className={style.formSummaryError}>{error}
            </div>}
            <div>
                <Button variant="outline-primary">Login</Button>
            </div>
        </form>

    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

        </div>

    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
