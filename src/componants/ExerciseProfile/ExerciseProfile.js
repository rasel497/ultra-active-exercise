import React, { useState } from 'react';
import Home from '../Home/Home';
import './ExerciseProfile.css'


const ExerciseProfile = ({ cart }) => {
    const [time, setTime] = useState([]);

    let totalTime = 0;
    for (const team of cart) {
        totalTime = totalTime + team.time;
    }

    const activityCompleted = () => {
        alert('Congratulation!')
    }


    const timeHandle = (ok) => {
        setTime(ok);
    }


    return (
        <div className='cart'>
            <h2>THIS IS PROFILE: {cart.length}</h2>
            <div className="my-profile">
                <img src="" alt="" />

                <div className="my-name">
                    <nav>
                        <a className="name" href="/name">Rashel Hossain</a> <br />
                        <a href="/address">Dhaka, Bangladsh</a>
                    </nav>
                </div>

                <div className="mydetails">
                    <div className="detail-card">
                        <a href="0">59kg</a>
                        <a href="0">5.6</a>
                        <a href="0">25yrs</a>
                    </div>
                </div>

                <div className="add-break">
                    <h4>Add A Break</h4>
                    <div className="break-card">
                        <button onClick={(e) => { timeHandle(e.target.innerText) }} className='break-btn'>10</button>
                        <button onClick={(e) => { timeHandle(e.target.innerText) }} className='break-btn'>20</button>
                        <button onClick={(e) => { timeHandle(e.target.innerText) }} className='break-btn'>30</button>
                        <button onClick={(e) => { timeHandle(e.target.innerText) }} className='break-btn'>40</button>
                    </div>
                </div>

                <div className="exercise-details">
                    <h4>Exercise Details</h4>
                    <p className='time-duration'>Exercise time: {totalTime}</p>
                    <p className='time-duration'>Break time: {time}</p>

                </div>

                <div className="acivity">
                    <button onClick={activityCompleted} className="acivity-btn">Activity Completed</button>
                </div>

            </div>


        </div>


    );
};

export default ExerciseProfile;