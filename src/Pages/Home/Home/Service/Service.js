import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{name,img,description,price}=service;
   
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="service">
            <img className='w-100' src={img} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>

             <button onClick={() => navigateToServiceDetail(price)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;