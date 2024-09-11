import React from 'react'
import Image from 'next/image'
import "../style/about.css"
import about_cool from "../component/images/about-main.jpg"


const page = () => {
  return (
    <>
      <div className='ab-main'>
        <Image src={about_cool} alt='not support' />
        <div className="pick-content">
          <h1>About Us</h1>
        </div>
      </div>
    </>
  )
}

export default page;