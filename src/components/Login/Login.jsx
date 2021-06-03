import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FornControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox"/> Remember me
            </div>
            <div>
                <button>Login</button>
                <button>Unlogin</button>
            </div>

        </form>

    )
}


const LoginReduxForm = reduxForm ({ form: 'login' })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    let addLogin = (values) => {
        alert(values);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

export default Login;
