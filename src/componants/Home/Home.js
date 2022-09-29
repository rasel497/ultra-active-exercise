import React, { useEffect, useState } from 'react';
import ExcerciseTeams from '../../ExcerciseTeams/ExcerciseTeams';
import ExerciseProfile from '../ExerciseProfile/ExerciseProfile';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);
    // console.log(teams);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div className='gym-container'>
            <div className="cards-container">
                {
                    teams.map(team => <ExcerciseTeams
                        key={team.id} team={team}
                    ></ExcerciseTeams>)
                }
            </div>

            <div className="profile-container">
                <h3>Exercise Details: </h3>
                <ExerciseProfile></ExerciseProfile>
            </div>

        </div>

    );
};

export default Home;



