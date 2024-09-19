import React from 'react'
import Image from 'next/image'
import "../style/contect.css"
import thamb from "../component/images/contectpage.jpg"
const page = () => {
  return (
    <>
    <div className='contect-container'>
        <div className='contect-se1'>
        <h1>Pioneering the electric <br/>revolution in India.</h1>
        <div>
            <Image src={thamb} alt='not support'/>
        </div>
        </div>
        <div className='contect-sec2'>
              <h1>contact us</h1>
              <p>
              We are a pioneering EV company committed to driving the electric mobility space in India.<br/> We believe that a seamless transition to an electric world will be driven by <br/>building deeply integrated mobility ecosystems. <br/>We do that by leveraging our deep engineering capability, to build great products and experiences across the entire EV ecosystem.
              </p>

              <ul>
                <li><a href='info@atherdealerships.com'>info@atherdealerships.com</a></li>
                <li><a href='care@atherdealerships.com'>care@atherdealerships.com</a></li>
                <li><a href='support@atherdealerships.com'>support@atherdealerships.com</a></li>
              </ul>
        </div>
    </div>
    </>
  )
}

export default page