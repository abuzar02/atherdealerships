import React from 'react'
import "../style/footer.css"
import Image from 'next/image'
import logo from "@/app/component/images/ather-logo.svg"
import Link from 'next/link'
const Footer = () => {
  return (
    <>

      <footer className="footer">
        <div className="container">
          <div className="logo">
            <Image src={logo} alt="not" />
          </div>
          <div className="copyright">
            <p>&copy; 2024 ATHER. All rights reserved.</p>
          </div>
         <div className='termsec'>
         <div  >
          <Link href="/privicy"><span className='privi'>Privacy & Policy</span></Link>
          </div>
          <p className='sp'>/</p>
          <div>
          <Link href="/termandcondition"><span className='privi'>Terms & Condition</span></Link>
          </div>
         </div>
        </div>
      </footer>

    </>
  )
}

export default Footer;