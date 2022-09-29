import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import ExcerciseTeams from '../ExcerciseTeams/ExcerciseTeams';
import ExerciseProfile from '../ExerciseProfile/ExerciseProfile';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);
    // console.log(teams);
    const [cart, setCart] = useState([]);
    // const [time, setTime] = useState([]);

    useEffect(() => {
        console.log('product load  b')
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setTeams(data)
                // console.log('product loaded')
            })
    }, []);


    // for db [A-08]
    useEffect(() => {
        console.log('local first line addddd', teams)
        const storedCart = getStoreCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = teams.find(team => team.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

            // console.log(addedProduct);
            setCart(savedCart);
        }
        // console.log('loacal finish')
    }, [teams])




    const addToCart = (team) => {
        // console.log(team);
        const newCart = [...cart, team];
        setCart(newCart);
        addToDb(team.id);
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

            <div className="bonus-questions">
                <h2>Questions?</h2>
                <p> <strong>01. How does react works?</strong> React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>

                <p><strong>
                    02. Difference between props and state?</strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>

                <p><strong>03. useEffecet without API load how many more works??</strong>You can have multiple useEffects in your code and this is completely fine! As hooks docs say, you should separate concerns. Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object.</p>
            </div>


        </div>

    );
};

export default Home;



