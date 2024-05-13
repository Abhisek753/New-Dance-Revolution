import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '10px',
    arrows: true,
    responsive: [{
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }]
  };

  return (
    <div className=''>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} >
            <div  >
            <img src={item.img} alt='img'  className="object-contain w-full h-full rounded-xl"/>

            </div>
            <div className='flex justify-between'>
            <h3>{item.title}</h3>
            <h3 className='text-blue-500'><a target='_blank' href={item.profile}>Profile</a></h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;
