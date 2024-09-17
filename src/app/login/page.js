import React from 'react'; 
import "../style/login.css"; 
import { FaGoogle } from "react-icons/fa";

const Page = () => {

  return (
   <>
       <div  className="login-container">


       <form>
            <h1 className='signin'>Sign in</h1>
            <label>Email:</label>
            <input type='text' placeholder='Email'/>
            <label>Password:</label>
            <input type='text' placeholder='Password'/>
            <input type='submit' placeholder='Login'/>
        </form>
        <div className="google-signin-button">
      <button>
        <FaGoogle /> Sign in with Google
      </button>
    </div>
       </div>
   </>
  );
};

export default Page;
