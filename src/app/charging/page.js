import React from 'react'
import "../style/charging.css"
import Image from 'next/image'
import bannerdesk from "../component/images/banner-desk.png"
import deskgrid from "../component/images/deskGrid.jpg"
import sec2img from "../component/images/section2img.webp"
import sec3img from "../component/images/office.webp"
const page = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className='sec-1'>
                        <h1>Never run out of charge.</h1>
                        <p>From home to the highways, you will be never far away from an Ather charger. Malls to cafes to offices to universities, different types of chargers for all your charging needs. Go stretch your range without stress.
                        </p>
                    </div>
                    <div className='sec-1img'>
                        <Image src={bannerdesk} alt='not-found' />
                    </div>

                    <div className='sec-two2'>
                        <div className='sec1content2'>
                            <h1>
                                Ather Neighbourhood Charger</h1>
                            <p>
                                Ather Neighbourhood Charger
                                Bring our charging infrastructure into your apartment, university or workplace and always be ready for your next ride.</p>
                            <div className='gridimg'>
                                <Image src={deskgrid} alt='not support' />
                            </div>
                        </div>
                    </div>

                    <div className='sec-two2'>
                        <div className='sec1content2'>

                            <div className='inerr-content'>
                                <div>
                                    <span>Charge on the go</span>
                                    <h1>India’s largest
                                        two wheeler fast
                                        charging network</h1>
                                </div>
                                <div>
                                    <h1>2,500+</h1>
                                    <span>chargers in 230+ cities</span>
                                </div>
                            </div>
                            <div className='gridimg'>
                                <Image src={sec2img} alt='not support' />
                            </div>

                            <div className='bottom-content'>
                                <div>
                                    <h2>
                                        Ather Grid Public Fast Chargers
                                    </h2>
                                    <p>
                                        Fast, reliable and all over Indian roads, just like our scooters. Find one, plug in, charge, monitor charge status and pay, on the Ather app.
                                    </p>
                                </div>
                                <div className='kilomiter'>
                                    <span>chargers in 230+ cities</span>
                                    <h2>15 km /10 min</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sec-two2'>
                        <div className='sec1content2'>

                            <div className='inerr-content'>
                                <div>
                                    <h1>Charge in your
                                        university
                                        apartment
                                        office</h1>
                                </div>
                                <div>
                                    <p>
                                        Convenience is finding a charger where you are. Charge any EV at the places you frequent and pump up your range. Roam freely, keep changing plans on the go.
                                    </p>
                                </div>
                            </div>
                            <div className='gridimg'>
                                <Image src={sec3img} alt='not support' />
                            </div>

                            <div className='bottom-content'>
                                <div>
                                    <h2>
                                        Ather Grid Public Fast Chargers
                                    </h2>
                                    <p>
                                        Fast, reliable and all over Indian roads, just like our scooters. Find one, plug in, charge, monitor charge status and pay, on the Ather app.
                                    </p>
                                </div>
                                <div>
                                    <h2>550+</h2>
                                    <span>Chargers installed</span>

                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;