import React, { useState } from 'react';
import axios from 'axios';


const TeamsList = () => {

    const [teamList, setTeamList] = useState([]);

    const getTeams = () => {
        axios.get('https://statsapi.web.nhl.com/api/v1/teams').then(res => {
            setTeamList(res.data.teams);
          });

        
    }

    return (
        <>
            <h3>NHL Team Info</h3>
            <button onClick={getTeams}>Get NHL Team Info</button>
            {teamList.length >= 1 ? teamList.map((team, i) => {
                return <p key={i}>Team ID: {team.id},  Team Name: {team.name}, </p>
            }) : ''}

        </>
    )
}

export default TeamsList;