

import React, { useState } from 'react';
import banner1 from '../../../images/one.png'
import banner2 from '../../../images/two.jpg'
import banner3 from '../../../images/three.jpg'
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel className=" img-fluid" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide" width="1440px" height="584px"
                />
                <Carousel.Caption>
                    <h1 className='mrgn'>Your best Adventure Deals with nature.</h1>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide" width="1440px" height="584px"
                />

                <Carousel.Caption>
                    <h1 className='mrgn'>"A journey of a thousend miles begins with a single steps."</h1>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide" width="1440px" height="584px"
                />

                <Carousel.Caption>
                    <h1 className='mrgn'>"To travel is to live."</h1>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;