import Link from 'next/link'
import React from 'react'
import '../style/fomrsec.css';
import Thank from "../component/images/thank.jpg"
import Image from 'next/image';
const page = () => {
  return (
   <>
  
<div className='thank'>
   
        <Image src={Thank} />
  
<h1> For Your Response</h1>
 <p>Your enquiry has been successfully received,<br></br>
 Our representative will get in touch with you soon.</p>
 <Link href="/">
 Go Back To Home
 </Link>
</div>

   </>
  )
}

export default page