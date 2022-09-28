import React from 'react';
import './ExcerciseTeams.css'

const ExcerciseTeams = () => {
    return (
        <div className='card'>
            {/* <img src={img} alt="" /> */}
            <div className="product-info">
                <h3 className='product-name'> </h3>
                <p>Short decription:</p>
                <p><small>For Age:  </small></p>
                <p><small>Time required:  </small></p>
            </div>

            <button className='btn-card'>
                <p className='btn-text'>Add To list</p>
            </button>
        </div>
    );
};

export default ExcerciseTeams;