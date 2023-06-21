import React from "react";
import {
    Link,
    withRouter
} from 'react-router-dom';

import classes from './Topbar.module.css';
import IPL_LOGO from "../../assets/ipl.png";
import Button from "../UI/Button/Button";
import {
    ROUTE
} from "../../utilities/RouteEndpoints";

/*

Expected Props:

isUserLoggedIn: This indicates that the admin user is logged in or not. Values can be true or false.
onUserLogout: This is the function which updates the admin logged-in status to false.

history - same object provided by Route component of React-Router-Dom
location - same object provided by Route component of React-Router-Dom
match - same object provided by Route component of React-Router-Dom

*/

const Topbar = (props) => {
    const history = props.history;
    const searchBoxRef = React.useRef();

    const onSearchClick = () => {
        const searchText = searchBoxRef.current.value;
        searchBoxRef.current.value = "";
        history.push(ROUTE.SEARCH_PAGE + "?q=" + searchText);
    }

    const onEnterClick = (e) => {
        e.preventDefault();
        onSearchClick();
    }

    const redirectToHomePage = () => {
        props.onUserLogout();
        history.push(ROUTE.HOME_PAGE);
    }

    const redirectToLoginPage = () => {
        history.push(ROUTE.LOGIN_PAGE);
    }

    const redirectToCreateTeamPage = () => {
        history.push(ROUTE.CREATE_TEAM_PAGE);
    }

    return ( <
        header className = {
            classes.Topbar
        } >
        <
        Link to = {
            ROUTE.HOME_PAGE
        } >
        <
        img className = {
            classes.Logo
        }
        src = {
            IPL_LOGO
        }
        /> <
        /Link>

        <
        div className = {
            classes.RightMenu
        } >
        <
        form onSubmit = {
            onEnterClick
        } >
        <
        div className = {
            classes.SearchBoxWrapper
        } >
        <
        input ref = {
            searchBoxRef
        }
        className = {
            classes.SearchBox
        }
        type = "text"
        placeholder = "Search Players"
        required / >
        <
        i className = "fas fa-search"
        onClick = {
            onSearchClick
        } > < /i> <
        /div> <
        /form> {
            !props.isUserLoggedIn ?
                <
                Button label = "Login"
            onClick = {
                redirectToLoginPage
            }
            />:
            <
            div className = {
                    classes.ButtonWrapper
                } >
                <
                Button label = "Create Team"
            onClick = {
                redirectToCreateTeamPage
            }
            /> <
            Button label = "Logout"
            onClick = {
                redirectToHomePage
            }
            /> <
            /div>
        } <
        /div> <
        /header>
    );
}

export default withRouter(Topbar);