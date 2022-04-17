import React from 'react';
import img  from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100' src={img} alt=""/>
        </div>
    );
};

export default NotFound;