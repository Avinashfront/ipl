import React from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import {
    TEAM_DATA
} from '../../utilities/ApplicationData';

import classes from './Homepage.module.css';

const Homepage = () => {
    const teamList = { ...TEAM_DATA
    };
    const renderTeamList = () => {
        return Object.keys(teamList).map(item => {
            const teamData = teamList[item];
            return ( <
                TeamCard key = {
                    teamData.teamCode
                }
                teamCode = {
                    teamData.teamCode
                }
                themeStartColor = {
                    teamData.themeStartColor
                }
                themeEndColor = {
                    teamData.themeEndColor
                }
                teamLogo = {
                    teamData.teamLogo
                }
                />
            )
        });
    }

    return ( <
        section className = {
            classes.MainContainer
        } >
        <
        div className = {
            classes.TeamGrid
        } > {
            renderTeamList()
        } < /div> <
        /section>
    );
}

export default Homepage;