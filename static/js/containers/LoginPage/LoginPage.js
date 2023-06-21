import React from "react";
import TextButton from "../../components/UI/Button/Button";
import {
    isStringEmpty
} from "../../utilities/CommonMethods";
import {
    ROUTE
} from "../../utilities/RouteEndpoints";

import classes from './LoginPage.module.css';

/*

Expected Props:

onAdminLogin: This is the function which updates th admin logged-in status to true.

history - same object provided by Route component of React-Router-Dom
location - same object provided by Route component of React-Router-Dom
match - same object provided by Route component of React-Router-Dom

*/

class LoginPage extends React.Component {
    onLoginClick = (e) => {
        e.preventDefault();

        if (!isStringEmpty(e.target.username.value) && !isStringEmpty(e.target.password.value)) {
            this.props.onAdminLogin();
            this.props.history.replace(ROUTE.HOME_PAGE)
        } else {
            alert("Incorrect Login Credentials")
        }
    }

    render() {
        return ( <
            section className = {
                classes.MainContainer
            } >
            <
            form className = {
                classes.LoginForm
            }
            onSubmit = {
                this.onLoginClick
            } >
            <
            h1 className = {
                classes.Heading
            } > Login < /h1> <
            input className = {
                classes.InputField
            }
            type = "text"
            placeholder = "Enter Username"
            name = "username" / >
            <
            input className = {
                classes.InputField
            }
            type = "password"
            placeholder = "Enter Password"
            name = "password" / >

            <
            TextButton label = "Login" / >
            <
            /form> <
            /section>
        );
    }
}

export default LoginPage;