"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../style/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Mobile number will be used as the password
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
        body: JSON.stringify({ email, password }), // Password is the mobile number
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userType', data.role);
        localStorage.setItem('loggedInEmail', email);

        if (data.role === 'admin') {
          router.push('/admin'); // Admin redirect
        } else {
          router.push('/'); // User redirect
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
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className='hed'>Login</h1>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email or Mobile Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mobile Number (as Password):</label> {/* Update label for clarity */}
        <input
          type="text"
          placeholder="Mobile Number"
          value={password} // The 'password' field will accept the mobile number
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
