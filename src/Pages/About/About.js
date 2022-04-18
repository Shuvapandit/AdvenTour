import React from 'react';
import img from '../../images/7O9A8642.jpg'
import './About.css'

const About = () => {
    return (
        
            <div className='card w-25 m-5' >
                <img className='' src={img} class="card-img-top" alt="..."></img>
  
  <div className='card-body'>
  
    <h5 className='card-title'>Name:Shuva Chakraborty.</h5>
    <p classNmae='card-text text-justify'>Hello,I'm Shuva .I am a fourth year student of computer Engineering.I want to be a skilled fullstack web developer.That's why I spend 8/10 hours a day behind it to become a skilled web developer.</p>
   
  </div>
</div>
    
    );
};

export default About;