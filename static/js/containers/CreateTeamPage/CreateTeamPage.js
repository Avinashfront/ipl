import React from "react";
import TextButton from "../../components/UI/Button/Button";
import {
    isArrayEmpty,
    isStringEmpty
} from "../../utilities/CommonMethods";
import {
    STORAGE_KEY
} from "../../utilities/Constants";
import {
    ROUTE
} from "../../utilities/RouteEndpoints";

import classes from './CreateTeamPage.module.css';

/*

Expected Props:

teamData: This is an object which holds information about all the teams. Sample data shown below:
{
    kkr: {
        teamCode: TEAM_CODE.KKR,
        name: "Kolkata Knight Riders",
        teamLogo: KKR_LOGO,
        themeStartColor: "#6F45AC",
        themeEndColor: "#301857",
        teamCoach: "Brendon McCullum",
        teamCaptain: "Eoin Morgan",
        championships: [2012, 2014]
    },
    mi: {...},
    ...
}

createNewTeam: This is a callback function to add the newly created team in the state of App component and also update the local storage. It accepts a team data object as an argument.

history - same object provided by Route component of React-Router-Dom
location - same object provided by Route component of React-Router-Dom
match - same object provided by Route component of React-Router-Dom

*/

class CreateTeamPage extends React.Component {
    state = {
        teamCode: "",
        name: "",
        teamLogo: "",
        themeStartColor: "#000",
        themeEndColor: "#000",
        teamCoach: "",
        teamCaptain: "",
        championships: [],
        showTeamCodeError: false
    }

    teamListFromStorage = isArrayEmpty(localStorage.getItem(STORAGE_KEY.TEAM_DATA)) ? [] : JSON.parse(localStorage.getItem(STORAGE_KEY.TEAM_DATA));

    onFieldValueChange = (e, fieldName) => {
        switch (fieldName) {
            case "name":
                this.setState({
                    name: e.target.value
                });
                break;
            case "teamCode":
                this.setState({
                    teamCode: e.target.value.toLowerCase()
                })
                break;
            case "teamLogo":
                this.setState({
                    teamLogo: e.target.value
                })
                break;
            case "themeStartColor":
                this.setState({
                    themeStartColor: e.target.value
                })
                break;
            case "themeEndColor":
                this.setState({
                    themeEndColor: e.target.value
                })
                break;
            case "teamCoach":
                this.setState({
                    teamCoach: e.target.value
                })
                break;
            case "teamCaptain":
                this.setState({
                    teamCaptain: e.target.value
                })
                break;
            case "championships":
                this.setState({
                    championships: e.target.value
                })
                break;
        }
    }

    onCreateFormSubmit = (e) => {
        e.preventDefault();

        if (this.props.teamData[this.state.teamCode]) {
            this.setState({
                showTeamCodeError: true
            })
            return
        } else {
            this.setState({
                showTeamCodeError: false
            })
        }
        const data = {
            teamCode: this.state.teamCode,
            name: this.state.name,
            teamLogo: this.state.teamLogo,
            themeStartColor: this.state.themeStartColor,
            themeEndColor: this.state.themeEndColor,
            teamCoach: this.state.teamCoach,
            teamCaptain: this.state.teamCaptain,
            championships: this.state.championships.split(",")
        }

        this.props.createNewTeam(data);
        alert("New Team Created!")
        this.props.history.push(ROUTE.HOME_PAGE);
    }

    render() {
        return ( <
            section className = {
                classes.MainContainer
            } >
            <
            form className = {
                classes.CreationForm
            }
            onSubmit = {
                this.onCreateFormSubmit
            } >
            <
            h1 className = {
                classes.Heading
            } > Create Team < /h1> <
            div >
            <
            p className = {
                classes.Label
            } > Team Name < /p> <
            input className = {
                classes.InputField
            }
            type = "text"
            name = "name"
            value = {
                this.state.name
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "name")
            }
            required / >
            <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > Team Code < /p> <
            input className = {
                classes.InputField
            }
            type = "text"
            name = "teamCode"
            value = {
                this.state.teamCode
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "teamCode")
            }
            required / > {!this.state.showTeamCodeError ? null :
                    <
                    p className = {
                        classes.Error
                    } > Team Code is not unique.Please
                try again. < /p>
            } <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > Team Logo(URL) < /p> <
            input className = {
                classes.InputField
            }
            type = "url"
            name = "teamLogo"
            value = {
                this.state.teamLogo
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "teamLogo")
            }
            required / >
            <
            /div>

            <
            div className = {
                classes.ThemePickerWrapper
            } >
            <
            div >
            <
            p className = {
                classes.Label
            } > Team Theme Start Color < /p> <
            input type = "color"
            name = "themeStartColor"
            value = {
                this.state.themeStartColor
            }
            onChange = {
                (e) => this.onFieldValueChange(e, "themeStartColor")
            }
            required / >
            <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > End Color < /p> <
            input type = "color"
            name = "themeEndColor"
            value = {
                this.state.themeEndColor
            }
            onChange = {
                (e) => this.onFieldValueChange(e, "themeEndColor")
            }
            required / >
            <
            /div> <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > Coach Name < /p> <
            input className = {
                classes.InputField
            }
            type = "text"
            name = "teamCoach"
            value = {
                this.state.teamCoach
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "teamCoach")
            }
            required / >
            <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > Captain Name < /p> <
            input className = {
                classes.InputField
            }
            type = "text"
            name = "teamCaptain"
            value = {
                this.state.teamCaptain
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "teamCaptain")
            }
            required / >
            <
            /div>

            <
            div >
            <
            p className = {
                classes.Label
            } > Championship Years(Separated by comma) < /p> <
            input className = {
                classes.InputField
            }
            type = "text"
            name = "championships"
            value = {
                this.state.championships
            }
            onInput = {
                (e) => this.onFieldValueChange(e, "championships")
            }
            required / >
            <
            /div>

            <
            div className = {
                classes.ButtonWrapper
            } >
            <
            TextButton label = "Create Team" / >
            <
            /div> <
            /form> <
            /section>
        );
    }
}

export default CreateTeamPage;