import React from 'react';
import {
    TEAM_DATA
} from '../../utilities/ApplicationData';

import classes from './PlayerCard.module.css';

const PlayerCard = (props) => {

    const getTeamThemeColor = () => {
        const teamData = TEAM_DATA[props.playerTeam]
        const bgColor = `linear-gradient(45deg, ${teamData.themeStartColor}, ${teamData.themeEndColor})`
        console.log(bgColor);
        return bgColor
    }

    return ( <
        div className = {
            classes.PlayerCard
        } >
        <
        div className = {
            classes.PlayerImageWrapper
        }
        style = {
            {
                backgroundImage: getTeamThemeColor()
            }
        } >
        <
        img className = {
            classes.PlayerImage
        }
        src = {
            props.playerImage
        }
        alt = {
            props.playerName
        }
        /> <
        /div>

        <
        div className = {
            classes.PlayerDataWrapper
        } >
        <
        h3 className = {
            classes.PlayerName
        } > {
            props.playerName
        } < /h3>

        <
        div className = {
            classes.PlayerStatsWrapper
        } >
        <
        div >
        <
        p className = {
            classes.StatValue
        } > {
            props.totalMatches
        } < /p> <
        h4 className = {
            classes.StatLabel
        } > Matches < /h4> <
        /div> <
        div >
        <
        p className = {
            classes.StatValue
        } > {
            props.totalRuns
        } < /p> <
        h4 className = {
            classes.StatLabel
        } > Runs < /h4> <
        /div> <
        div >
        <
        p className = {
            classes.StatValue
        } > {
            props.totalWickets
        } < /p> <
        h4 className = {
            classes.StatLabel
        } > Wickets < /h4> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default PlayerCard;