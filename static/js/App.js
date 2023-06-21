import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Homepage from "./containers/Homepage/Homepage";
import TeamDetailsPage from "./containers/TeamDetailPage/TeamDetailPage";

import classes from './App.module.css';
import {
    ROUTE
} from "./utilities/RouteEndpoints";
import SearchPage from "./containers/SearchPage/SearchPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import CreateTeamPage from "./containers/CreateTeamPage/CreateTeamPage";
import {
    isArrayEmpty
} from "./utilities/CommonMethods";
import {
    STORAGE_KEY
} from "./utilities/Constants";
import {
    PLAYER_DATA,
    TEAM_DATA
} from "./utilities/ApplicationData";

class App extends React.Component {
        getTeamDataFromLocalStorage = () => {
            let teamData = [];
            if (isArrayEmpty(localStorage.getItem(STORAGE_KEY.TEAM_DATA))) {
                teamData = { ...TEAM_DATA
                }
                localStorage.setItem(STORAGE_KEY.TEAM_DATA, JSON.stringify(TEAM_DATA));
            } else {
                teamData = JSON.parse(localStorage.getItem(STORAGE_KEY.TEAM_DATA));
            }
            return teamData;
        }

        getPlayerDataFromLocalStorage = () => {
            let playerData = [];
            if (isArrayEmpty(localStorage.getItem(STORAGE_KEY.PLAYER_DATA))) {
                playerData = [...PLAYER_DATA];
                localStorage.setItem(STORAGE_KEY.PLAYER_DATA, JSON.stringify(PLAYER_DATA));
            } else {
                playerData = JSON.parse(localStorage.getItem(STORAGE_KEY.PLAYER_DATA));
            }
            return playerData;
        }

        state = {
            teamData: this.getTeamDataFromLocalStorage(),
            playerData: this.getPlayerDataFromLocalStorage(),
            loggedInStatus: localStorage.getItem(STORAGE_KEY.LOGIN_STATUS) === "true"
        }

        createNewTeam = (data) => {
            const updatedTeamData = this.state.teamData;
            updatedTeamData[data.teamCode] = data;
            localStorage.setItem(STORAGE_KEY.TEAM_DATA, JSON.stringify(updatedTeamData));
            this.setState({
                teamData: updatedTeamData
            });
        }

        onUserLogin = () => {
            this.setState({
                loggedInStatus: true
            })
            localStorage.setItem(STORAGE_KEY.LOGIN_STATUS, true)
        }

        onUserLogout = () => {
            this.setState({
                loggedInStatus: false
            })
            localStorage.setItem(STORAGE_KEY.LOGIN_STATUS, false)
        }

        render() {
                return ( <
                        BrowserRouter >
                        <
                        div className = {
                            classes.App
                        } >
                        <
                        Topbar isUserLoggedIn = {
                            this.state.loggedInStatus
                        }
                        onUserLogout = {
                            this.onUserLogout
                        }
                        /> <
                        main >
                        <
                        Switch >
                        <
                        Route path = {
                            ROUTE.TEAM_DETAILS + "/:id"
                        }
                        render = {
                            (props) => < TeamDetailsPage { ...props
                            }
                            teamData = {
                                this.state.teamData
                            }
                            playerData = {
                                this.state.playerData
                            }
                            />} / >
                            <
                            Route path = {
                                ROUTE.SEARCH_PAGE
                            }
                            render = {
                                (props) => < SearchPage { ...props
                                }
                                playerData = {
                                    this.state.playerData
                                }
                                />} / >
                                <
                                Route path = {
                                    ROUTE.LOGIN_PAGE
                                }
                                render = {
                                    (props) => < LoginPage { ...props
                                    }
                                    onAdminLogin = {
                                        this.onUserLogin
                                    }
                                    />} / >
                                    <
                                    Route exact path = {
                                        ROUTE.CREATE_TEAM_PAGE
                                    }
                                    render = {
                                        (props) => < CreateTeamPage { ...props
                                        }
                                        createNewTeam = {
                                            this.createNewTeam
                                        }
                                        teamData = {
                                            this.state.teamData
                                        }
                                        />} / >
                                        <
                                        Route exact path = {
                                            ROUTE.HOME_PAGE
                                        }
                                        render = {
                                            (props) => < Homepage { ...props
                                            }
                                            teamData = {
                                                this.state.teamData
                                            }
                                            />} / >
                                            <
                                            /Switch> <
                                            /main> <
                                            footer > < /footer> <
                                            /div> <
                                            /BrowserRouter>
                                        );
                                    }
                                }

                                export default App;