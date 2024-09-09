import Image from 'next/image'
import React from 'react'
import form_image from '../component/images/pick2.webp'
import '../style/fomrsec.css'

const Form = () => {
    return (
        <div className='main'>
            <div className='container'>

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



                <div className='main2'>
                    
                    <div className='left-side'>
                        <form>
                            <h1>Application Form</h1>
                            <input type='text' placeholder='Name' required />
                            <input type='number' placeholder='Number' required />
                            <input type='email' placeholder='Email' required />
                            <input type='text' placeholder='Qualificatio' required />
                            <input type='submit' placeholder='Submit' />
                        </form>
                    </div>

                    <section id="requirements">
                    <h2>Requirements and Qualifications</h2>
                    <p>To become an Ather Energy dealer, you should have a solid business background and a commitment to excellent customer service. Our ideal partners are enthusiastic about electric mobility and have the resources to support a successful dealership.</p>
                    <p>To apply, please fill out our contact us for more information.</p>
                </section>
                </div>
            </div>
        </div>
    )
}

export default Form