import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <p className='font-weight-bold h3'>ADVEN-TOUR..</p>
            <div>
            <Link to="/home">Home</Link>
            </div>
        </nav>
    );
};

export default Header;