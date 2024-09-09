"use client";
import { useState, useEffect } from 'react';

import React from "react";
import ThreeSlideSlider from "./ThreeSlideSlider";
import "../style/style.css"
import Image from 'next/image'
import pick from "../component/images/pick1.webp"
import pick2 from "../component/images/pick2.webp"
import pick3 from "../component/images/pick3.webp"
import pick4 from "../component/images/pick4.webp"
import helmat from "../component/images/helmet.webp"
import merch from "./images/merch.webp"
import accessory from "./images/Accessories.webp"
import { IoIosArrowRoundForward } from "react-icons/io";
import charging from "./images/charging.webp"
import athercharge from "./images/Athercharger.webp"
import at from "./images/at2.webp"
import at3 from "./images/at3.webp"
import intro1 from "./images/intro2.jpg"
import whyinto from "./images/into1.jpg"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
   // Automatically open popup after 10 seconds
   useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds (10,000 ms)

    // Clean up the timer when component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Close the popup after submission
    setIsOpen(false);
  };

  return (
    <>
      <ThreeSlideSlider />
      <div className="container">

        <div className="sec1">
          <h1>Become an Ather Energy Electric Scooter Dealer</h1>
          <h3>Partner with Us in Revolutionizing Urban Mobility</h3>
          <p>
            Partner with Ather Energy, a leader in electric mobility, and be part of the green revolution transforming cities across the country. As an authorized dealer, you'll not only contribute to the shift towards sustainable transportation but also gain access to cutting-edge technology, unparalleled support, and a growing community of eco-conscious customers.
          </p>
          <p>
          Together, let's redefine urban mobility by offering high-performance electric scooters that are efficient, innovative, and environmentally friendly. Join our network and drive the future of electric transportation today!
          </p>
        </div>
        <div className="sec2">
          <div>
            <Image src={intro1} alt="not support" />
          </div>
          <div className="into-con">
            <h2>Introduction</h2>
            <p>Join us in shaping the future of urban transportation by becoming an authorized Ather Energy dealer. Ather Energy is at the forefront of electric scooter technology, and we’re looking for passionate partners to expand our reach and bring cutting-edge mobility solutions to new markets.</p>
          </div>
        </div>

        <div className="pa"><h1>Pick your Ather</h1></div>

        <div className="pick">
          <Image src={pick} alt="not support" />
          <div className="pick-content">
            <marquee behavior="smooth" direction="right">All New</marquee>
            <h1>Ather Rizta</h1>
            <p>Starting at Rs. 1,09,999</p>
            <p>or Flexipay Rs. 2199/month</p>
            <button>Book Now</button>
          </div>
        </div>

        <div className="sec4">
          <div className="s4-box1">
            <div className="img-box">
              <Image src={pick2} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Ather Rizta</h1>
              <p>Starting at Rs. 1,09,999</p>
              <p>or Flexipay Rs. 2199/month</p>
              <button>Book Now</button>
            </div>
          </div>


          <div className="s4-box1">
            <div className="img-box">
              <Image src={pick3} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Ather Rizta</h1>
              <p>Starting at Rs. 1,09,999</p>
              <p>or Flexipay Rs. 2199/month</p>
              <button>Book Now</button>
            </div>
          </div>

          <div className="s4-box1">
            <div className="img-box">
              <Image src={pick4} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Ather Rizta</h1>
              <p>Starting at Rs. 1,09,999</p>
              <p>or Flexipay Rs. 2199/month</p>
              <button>Book Now</button>
            </div>
          </div>


        </div>
        <div className="model">
          <p>Compare Models</p>
          <div className="arrow">
            <IoIosArrowRoundForward />
          </div>
        </div>

        <section id="why-ather">
          <div className="why-cont">
            <h2>Why Choose Ather Energy?</h2>
            <h3>Innovative Products</h3>
            <p>Ather Energy’s scooters are designed with advanced technology, offering impressive performance, efficiency, and style.</p>
            <h3>Market Potential</h3>
            <p>With a rapidly growing market for electric vehicles, our scooters are well-positioned to meet the increasing demand for sustainable transportation solutions.</p>
          </div>
          <div className="why-img">
            <Image src={whyinto} alt="not support" />
          </div>
        </section>


        <div className="head">
          <h1>Top up your Ather experience.</h1>
        </div>
        <div className="ex-main">
          <div className="ex-vox">
            <div className="img-box">
              <Image src={merch} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Merch</h1>
              <p>Apparel & Helmets.</p>
              <div className="ex-aro"><p>Shop Merch</p><div className="arrow2"><IoIosArrowRoundForward /></div></div>
            </div>
          </div>

          <div className="ex-vox">
            <div className="img-box">
              <Image src={helmat} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Smart Helmets</h1>
              <p>Say Halo to an all-new helmet experience.</p>
              <div className="ex-aro"><p>Explore smart helmet</p><div className="arrow2"><IoIosArrowRoundForward /></div></div>
            </div>
          </div>

          <div className="ex-vox">
            <div className="img-box">
              <Image src={accessory} alt="not support" />
            </div>
            <div className="s-img-con">
              <h1>Accessories</h1>
              <p>Wonderful. Purposeful.</p>
              <div className="ex-aro"><p>Shop Accessoreis</p><div className="arrow2"><IoIosArrowRoundForward /></div></div>
            </div>
          </div>
        </div>


        <div className="story">
          <h1>Stories at Ather</h1>
        </div>
        <div className="atherstory">
          <div className="chargin-box">
            <div className="chargeimg">
              <Image src={charging} alt="not support" />
            </div>
            <div className="content-charge">
              <p>Abishek. 4min read .24june 2024</p>
              <h1>You all need to konw about electric Scooter....</h1>
              <p>Discover the electric scooter charging cost in india...</p>
            </div>
          </div>

          <div className="chargin-box">
            <div className="chargeimg">
              <Image src={athercharge} alt="not support" />
            </div>
            <div className="content-charge">
              <p>Abishek. 4min read .24june 2024</p>
              <h1>You all need to konw about electric Scooter....</h1>
              <p>Discover the electric scooter charging cost in india...</p>
            </div>
          </div>

        </div>

        <div className="atherstory">
          <div className="chargin-box">
            <div className="chargeimg">
              <Image src={at} alt="not support" />
            </div>
            <div className="content-charge">
              <p>Abishek. 4min read .24june 2024</p>
              <h1>You all need to konw about electric Scooter....</h1>
              <p>Discover the electric scooter charging cost in india...</p>
            </div>
          </div>

          <div className="chargin-box">
            <div className="chargeimg mt-top">
              <Image src={at3} alt="not support" />
            </div>
            <div className="content-charge">
              <p>Abishek. 4min read .24june 2024</p>
              <h1>You all need to konw about electric Scooter....</h1>
              <p>Discover the electric scooter charging cost in india...</p>
            </div>
          </div>
        </div>

      </div>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-popup" onClick={togglePopup}>&times;</span>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <label>
                Phone:
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <label>
                City:
                <input 
                  type="text" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  required 
                />
              </label>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
