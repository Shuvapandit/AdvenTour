
import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import img1 from '../../images/one.png'
import img2 from '../../images/two.jpg'
import img3 from '../../images/three.jpg'
import './Home.css'

const Home = () => {
    return (
        
       <div>
           
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100   hght"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <h1 className='margin'>Your best Adventure Deals with nature.</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 hght"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className='margin'>To travel is to live</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  hght"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className='margin'>A journey of a thousend miles begins with a single steps</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


       </div>
     
    );
};

export default Home;