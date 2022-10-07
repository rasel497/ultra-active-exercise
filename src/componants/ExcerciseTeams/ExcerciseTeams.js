import React from 'react';
import './ExcerciseTeams.css'

const ExcerciseTeams = (props) => {
    const { addToCart } = props;
    const { name, img, description, age, time } = props.team;

    // const addToCart = (id) => {
    //     console.log('added', id)
    // }

    return (

        <div className='card'>
            <img src={img} alt="" />
            <div className="card-info">
                <h3 className="card-name">{name}</h3>
                <p>{description ? description?.slice(0, 35) : "No description"}...</p>
                <p><small>For Age: {age}</small></p>
                <p><small>Time required: {time} </small></p>
            </div>

            <button onClick={() => addToCart(props.team)} className='btn-card'>
                <p className='btn-text'>Add To list</p>
            </button>

            {/* <button onClick={() => addToCart(id)} className='btn-card'>
                <p className='btn-text'>Add To list</p>
            </button> */}

        </div>

    );
};

export default ExcerciseTeams;