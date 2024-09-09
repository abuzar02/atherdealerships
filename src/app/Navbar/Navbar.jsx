// import React from 'react'
// import logo from "@/app/component/images/ather-logo.svg"
// import Image from 'next/image'
// import "../style/style.css"
// import { MdCall } from "react-icons/md";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { FaXmark } from "react-icons/fa6";


// const Navbar = () => {
//     return (
//         <>
//             <header>
//                 <div className="container d-flex">
//                     <div className="logo">
//                         <Image src={logo} alt="not" />
//                         <span className='bar'><FaBarsStaggered /> </span>
//                     </div>
//                     <div className="nav-content">
//                         <ul className="d-flex new">
//                             <span className='x-mark'><FaXmark /></span>
//                             <li>Home</li>
//                             <li>Contect us</li>
//                             <li>Dealer ship</li>
//                             <li className='call'><span><MdCall /></span> Call : 0123456789 </li>
//                         </ul>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }

// export default Navbar

'use client'; // This directive enables the use of client-side features in this component

import React, { useState } from 'react';
import logo from "@/app/component/images/ather-logo.svg";
import Image from 'next/image';
import "../style/style.css";
import { MdCall } from "react-icons/md";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed
  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <header>
        <div className="container d-flex">
          <div className="logo">
            <Image src={logo} alt="Ather Logo" />
            {/* Only toggles the menu */}
            <span className='bar' onClick={handleMenuToggle}>
              <FaBarsStaggered />
            </span>
          </div>
          <div className={`new ${menuOpen ? 'open' : ''}`}>
            {/* Only toggles the menu */}
            <span className='x-mark' onClick={handleMenuToggle}>
              <FaXmark />
            </span>
            <ul className='d-flexx'>
              <Link href="/"><li >Home</li></Link>
            <Link href="/form"> <li >Dealership</li></Link> 
              <li className='call'>
                <span><MdCall /></span> Call: 0123456789
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

