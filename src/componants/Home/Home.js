import React from 'react';
import ExcerciseTeams from '../../ExcerciseTeams/ExcerciseTeams';
import './Home.css'


const Home = () => {

    return (
        <div className='gym-container'>
            <div className="cards-container">
                <ExcerciseTeams></ExcerciseTeams>
            </div>

            <div className="profile-container">
                <h3>Exercise Details: </h3>
            </div>

        </div>

    );
};

export default Home;



