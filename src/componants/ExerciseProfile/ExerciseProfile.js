import React from 'react';
import './ExerciseProfile.css'

const ExerciseProfile = () => {


    const activityCompleted = () => {
        alert('Congratulation!')
    }

    return (
        <div className='cart'>
            <h4>My Profile</h4>


            <button onClick={activityCompleted} className="acivity-btn">Activity Completed</button>
        </div>


    );
};

export default ExerciseProfile;