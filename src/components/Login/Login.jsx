import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, renderTextField} from "../FornControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../FornControls/FormsControls.module.css";
import {Button} from "@material-ui/core";
import l from "./Login.module.css"
import {renderChildren} from "redux-form/lib/ReduxFormContext";


 const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField ("Email", "email",[required], renderTextField )}
            {createField ("Password","password",[required], renderTextField, {type:"password"})}
            {createField( null, "rememberme",[],Input, {type:"checkbox"},"remember me"    )}
            {captchaUrl && <img src={captchaUrl} alt={"img"}/> }
            {captchaUrl && createField( "Enter symbols from image", "captcha", [required], renderTextField, {} ) }
            {error && <div className={style.formSummaryError}>{error}
            </div>}
            <div>
                <Button color="primary" variant="contained" type="submit">Login</Button>
               {/* <button>Login</button>*/}
            </div>
        </form>

    )
}

export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



export const Login = (props) => {
     const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={l.logIn}>
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
