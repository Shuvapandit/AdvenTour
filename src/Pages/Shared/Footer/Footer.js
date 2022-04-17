import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center  pad'>
            <p className='text-white h5'> &copy; All Right Received By Shuva Chakraborty , {year}</p>
        </footer>

    );
};

export default Footer;