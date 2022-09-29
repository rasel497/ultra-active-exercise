import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <nav>
            {/* <img src="/src/logo.svg" alt="" /> */}
            <div className='header-size'>
                <FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon>
                <h2 className='text-title'>ULTRA-ACTIVE-EXCERCISE</h2>
            </div>
        </nav>
    );
};

export default Header;