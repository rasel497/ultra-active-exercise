import React from 'react';
import './ExerciseProfile.css'


const ExerciseProfile = () => {


    const activityCompleted = () => {
        alert('Congratulation!')
    }

    return (
        <div className='cart'>
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
                        <a href="0">10s</a>
                        <a href="0">20s</a>
                        <a href="0">30s</a>
                        <a href="0">40s</a>
                    </div>
                </div>
            </div>
            <button onClick={activityCompleted} className="acivity-btn">Activity Completed</button>
        </div>


    );
};

export default ExerciseProfile;