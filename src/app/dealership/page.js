

"use client";
import Image from 'next/image';
import { useState } from 'react';

import form_image from '../component/images/pick2.webp';
import '../style/fomrsec.css';
import cool from "../component/images/cool-about.jpg";
import Form from '../component/Form';

const Page = () => {
   
    

    return (
        <>
            <div className='main'>
                <div className='ab-main'>
                    <Image src={cool} alt='not support' />
                    <div className="pick-content">
                        <h1>Dealer Ship</h1>
                    </div>
                </div>

                <div className='container'>
                    <section>
                        <div className='ather-dealer'>
                            <h1>Ather Dealership: A Revolution in Electric Mobility</h1>
                            <p>Ather dealerships are at the forefront of the electric vehicle revolution, offering customers a seamless and innovative experience. Ather Energy, known for its premium electric scooters, has transformed the way we think about transportation by combining cutting-edge technology with environmental responsibility.</p>
                            <p>
                                At an Ather dealership, visitors are greeted by a modern, eco-friendly environment where they can explore the latest models like the Ather 450X and 450 Plus. These scooters are not just vehicles; they are smart machines equipped with features like touchscreen dashboards, mobile app connectivity, and real-time navigation. The focus is on delivering a superior ride experience while also contributing to a cleaner, greener future.
                            </p>
                            <p>In addition to selling electric scooters, Ather dealerships provide top-notch after-sales services. The service centers are equipped with the latest tools and technology to ensure that your electric scooter runs smoothly for years. The knowledgeable staff is always ready to help, whether it’s with routine maintenance or answering questions about electric mobility.</p>
                            <p>
                                Choosing an Ather dealership means becoming part of a community that is passionate about sustainability and innovation. Whether you are a first-time buyer or an electric vehicle enthusiast, Ather dealerships offer an unparalleled experience.
                            </p>
                        </div>
                    </section>
                    <div className='benefit'>
                        <section id="dealer-benefits">
                            <h2>Dealer Benefits</h2>
                            <h3>Support</h3>
                            <p>As an Ather dealer, you’ll receive comprehensive training, marketing support, and ongoing technical assistance to ensure your success.</p>
                            <h3>Profitability</h3>
                            <p>Benefit from our strong brand reputation and a product lineup that stands out in the electric scooter market, leading to higher customer satisfaction and increased sales.</p>
                            <h3>Brand Strength</h3>
                            <p>Being associated with a well-regarded and innovative brand like Ather Energy can significantly enhance your business reputation.</p>
                        </section>
                        <div className='right-side'>
                            <Image src={form_image} alt="" />
                        </div>
                    </div>
                </div>
                <div className='main2'>
                    <section className='container'>
                        <div className="left-side">
                          <Form/>
                        </div>

                        <section id="requirements">
                            <h2>Requirements and Qualifications</h2>
                            <p>To become an Ather Energy dealer, you should have a solid business background and a commitment to excellent customer service. Our ideal partners are enthusiastic about electric mobility and have the resources to support a successful dealership.</p>
                            <p>To apply, please fill out our contact us for more information.</p>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Page;
