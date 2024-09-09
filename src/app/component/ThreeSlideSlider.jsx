// components/ThreeSlideSlider.js
"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import banner from '@/app/component/images/banner1.webp'
import "../style/slide.css"
import bannerr2 from "../component/images/bannerr2.webp"



const ThreeSlideSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div >
      <Slider {...settings}>

        <div className='banner'>
          <Image src={banner} alt={`Slide `} />
          <div className="contentslide">
            <h1>Meet Rizta</h1>
            <p>From our family to yours</p>
            <button>Book Know</button>
            <button>Explore Rizta</button>
          </div>
        </div>

        <div className='banner'>
          <Image src={bannerr2} alt={`Slide `} />
          <div className="contentslide">
            <h1>Ather 450</h1>
            <p>The bike of scooter </p>
            <button>Know More</button>
            <button>Book a Test drive</button>
          </div>
        </div>
        <div className='banner'>
          <div className="slide">
            <video
              src="https://media.atherenergy.com/Home_SH_desk.mp4"
              preload="auto"
              loop
              playsInline
              webkit-playsinline
              x5-playsinline
              style={{ width: "100%", height: "100%" }}
              autoPlay
              muted
            ></video>
          </div>
          <div className="contentslide">
            <h1>Introducing Halo & Halo bit</h1>
            <button>Know More</button>
            <button>Pre-book Halo</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ThreeSlideSlider;
