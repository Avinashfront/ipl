import React from "react";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import {
    PLAYER_DATA,
    TEAM_DATA
} from "../../utilities/ApplicationData";
import {
    isArrayEmpty,
    isObjectEmpty,
    isStringEmpty
} from "../../utilities/CommonMethods";

import classes from './TeamDetailPage.module.css';

class TeamDetailsPage extends React.Component {
    state = {
        teamCode: null,
        teamData: null,
        playerData: [],
    }

    updatePlayerList = () => {
        if (!isObjectEmpty(this.props.match) && !isObjectEmpty(this.props.match.params) && !isStringEmpty(this.props.match.params.id)) {
            const teamCode = this.props.match.params.id;
            const teamData = this.props.teamData;
            const selectedTeamData = teamData[teamCode];

            const playerData = this.props.playerData;
            const playerList = playerData.filter(item => {
                return item.playerTeam === teamCode;
            })
            this.setState({
                teamCode: teamCode,
                teamData: selectedTeamData,
                playerData: playerList
            });
        } else {
            this.setState({
                teamCode: null,
                teamData: null,
                playerData: []
            });
        }
    }

    componentDidMount() {
        this.updatePlayerList();
    }

    componentDidUpdate(prevProps) {
        if (!isObjectEmpty(this.props.match) && !isObjectEmpty(this.props.match.params) && !isStringEmpty(this.props.match.params.id) && prevProps.match.params.id !== this.props.match.params.id) {
            this.updatePlayerList();
        }
    }

    render() {
        return (
            isStringEmpty(this.state.teamCode) || isObjectEmpty(this.state.teamData) ? null :
            <
            div className = {
                classes.MainContainer
            } >
            <
            div className = {
                classes.TeamCard
            } >
            <
            div className = {
                classes.TeamImageWrapper
            }
            style = {
                {
                    backgroundImage: `linear-gradient(45deg, ${this.state.teamData.themeStartColor}, ${this.state.teamData.themeEndColor})`
                }
            } >
            <
            img className = {
                classes.TeamLogo
            }
            src = {
                this.state.teamData.teamLogo
            }
            /> <
            /div>

            <
            div className = {
                classes.TeamMetaWrapper
            } >
            <
            h1 className = {
                classes.MainHeading
            } > {
                this.state.teamData.name
            } < /h1>

            <
            div className = {
                classes.StatsWrapper
            } >
            <
            h4 className = {
                classes.StatsLabel
            } > Championships: < /h4> <
            p className = {
                classes.StatsValue
            } > {
                isArrayEmpty(this.state.teamData.championships) ? "No championships won" : this.state.teamData.championships.join(", ")
            } < /p> <
            /div> <
            div className = {
                classes.StatsWrapper
            } >
            <
            h4 className = {
                classes.StatsLabel
            } > Coach: < /h4> <
            p className = {
                classes.StatsValue
            } > {
                this.state.teamData.teamCoach
            } < /p> <
            /div> <
            div className = {
                classes.StatsWrapper
            } >
            <
            h4 className = {
                classes.StatsLabel
            } > Captain: < /h4> <
            p className = {
                classes.StatsValue
            } > {
                this.state.teamData.teamCaptain
            } < /p> <
            /div> <
            /div> <
            /div>


            <
            h3 className = {
                classes.MainHeading
            } > Player List < /h3> <
            div className = {
                classes.PlayersGrid
            } > {
                this.state.playerData.map(item => {
                    return ( <
                        PlayerCard { ...item
                        }
                        />
                    )
                })
            }

            {
                !isArrayEmpty(this.state.playerData) ? null :
                    <
                    h3 className = {
                        classes.NoResults
                    } > No Players Found < /h3>
            } <
            /div> <
            /div>
        );
    }
}

export default TeamDetailsPage;