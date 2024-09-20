"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import "../style/login.css";

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
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userType', data.role);

        if (data.role === 'admin') {
          router.push('/admin'); // Redirect to admin dashboard
        } else {
          setError('Only admin can access this page');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Failed to login');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="admin-login-form">
        <h1>Admin Login</h1>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Page;
