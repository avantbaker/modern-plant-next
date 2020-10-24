import React from 'react';
import Slider from 'react-slick';

export default function Carousel({ children }) {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  )
} 
