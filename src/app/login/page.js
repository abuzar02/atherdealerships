// "use client" directive to specify this component should run on the client-side
"use client";

import { useState } from 'react';
import React from 'react'; 
import "../style/login.css"; 
import { useRouter } from 'next/navigation';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store login status in localStorage or cookie
        localStorage.setItem('loggedIn', 'true');
        router.push('/admin');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h1 className='signin'>Admin login</h1>
          <label>Email:</label>
          <input 
            type='email' 
            placeholder='Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <label>Password:</label>
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <button type='submit'>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Page;
