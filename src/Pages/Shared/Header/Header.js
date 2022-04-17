import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='header'>
            <p className='text-white font-weight-bold h2'>Adven-Tour..</p>
            {/* 4.import link from routing for no loading  */}
            <div>
                <Link to="/home">Home</Link>
                
                
                
            
                
            </div>
        </nav>
        </header>
            
        
    );
};

export default Header;