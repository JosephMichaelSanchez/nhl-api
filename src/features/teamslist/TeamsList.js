import React, { useState } from 'react';
import axios from 'axios';


const TeamsList = () => {

    // create an array to hold the teams and their data
    const [teamList, setTeamList] = useState([]);
    
    

    // function to retrieve the team data from the NHL API
    const getTeams = () => {
        axios.get('https://statsapi.web.nhl.com/api/v1/teams').then(res => {
            // the data portion of the response will be the new value of the tealList array
            setTeamList(res.data.teams);
          });
    }

    return (
        <>
            <h3>NHL Team Info</h3>
            {/* button to call the function which gets the data */}
            <button onClick={getTeams}>Get NHL Team Info</button>
            {/* loop through the teamList array if it has at least one object inside it */}
            {teamList.length >= 1 ? teamList.map((team, i) => {
                return <p key={i}>Team ID: {team.id} - Team Name: {team.name} </p>
            }) : ''}

        </>
    )
}

export default TeamsList;