import React, { useEffect, useState } from 'react';
import ExcerciseTeams from '../ExcerciseTeams/ExcerciseTeams';
import ExerciseProfile from '../ExerciseProfile/ExerciseProfile';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);
    // console.log(teams);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])



    const addToCart = (team) => {
        console.log(team);
        const newCart = [...cart, team];
        setCart(newCart);
    }

    return (
        <div className='gym-container'>
            <div className="cards-container">
                {
                    teams.map(team => <ExcerciseTeams
                        key={team.id}
                        team={team}
                        addToCart={addToCart}
                    ></ExcerciseTeams>)
                }
            </div>

            <div className="profile-container">
                {/* <div className="h3">Pro: {cart.length}</div> */}
                <ExerciseProfile cart={cart}></ExerciseProfile>

            </div>


        </div>

    );
};

export default Home;



