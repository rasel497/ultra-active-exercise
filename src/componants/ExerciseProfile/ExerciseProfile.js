import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import Home from '../Home/Home';
import './ExerciseProfile.css'


const ExerciseProfile = ({ cart }) => {
    const [time, setTime] = useState([]);
    console.log(cart);

    const breakTime = (time) => {
        setTime(time)
        localStorage.setItem('Break-time', time)
    }


    useEffect(() => {
        const storagevalue = localStorage.getItem('Break-time')
        setTime(storagevalue);
    }, [])


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

            <div className="my-name">
                <nav>
                    <a className="name" href="/name">Rashel Hossain</a> <br />
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    <a className='location' href="/address">Dhaka, Bangladsh</a>
                </nav>
            </div>

            <div className="my-profile">

                <div className="mydetails">
                    <div className="detail-card">
                        <a href="0">59kg</a>
                        <a href="0">5.6</a>
                        <a href="0">25yrs</a>
                    </div>
                </div>

                <div className="add-break">
                    <h3>Add A Break</h3>
                    <div className="break-card">
                        <button onClick={() => breakTime(10)} className='break-btn'>10</button>
                        <button onClick={() => breakTime(20)} className='break-btn'>20</button>
                        <button onClick={() => breakTime(30)} className='break-btn'>30</button>
                        <button onClick={() => breakTime(40)} className='break-btn'>40</button>
                    </div>
                </div>

                <div className="exercise-details">
                    <h3>Exercise Details</h3>
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