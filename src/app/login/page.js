"use client";

import { useState } from 'react';
import React from 'react'; 
import "../style/login.css"; 
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState(''); // Using email field for both mobile number and email
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
        // Store login status and email in localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('loggedInEmail', email);

        if (data.userType === 'admin') {
          router.push('/admin'); // Redirect admin to dashboard
        } else {
          router.push('/'); // Redirect user to home page
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email or Mobile Number:</label>
        <input 
          type='text' 
          placeholder='Email or Mobile Number' 
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
  );
};

export default Login;
