import React from "react";
import {
    Link
} from 'react-router-dom';
import {
    ROUTE
} from "../../utilities/RouteEndpoints";

import classes from "./TeamCard.module.css";

const TeamCard = (props) => {
    return ( <
        Link className = {
            classes.TeamCard
        }
        to = {
            ROUTE.TEAM_DETAILS + "/" + props.teamCode
        }
        style = {
            {
                backgroundImage: `linear-gradient(45deg, ${props.themeStartColor}, ${props.themeEndColor})`
            }
        } >
        <
        img className = {
            classes.TeamLogo
        }
        src = {
            props.teamLogo
        }
        /> <
        /Link>
    );
}

export default TeamCard;