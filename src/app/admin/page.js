"use client"
import { useEffect, useState } from 'react';
import AdminPanel from '../component/Admin';
import { useRouter } from 'next/navigation'

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check login status from localStorage or cookie
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return null; // You can also show a loading spinner here
  }

  return (
    <>
      <AdminPanel />
    </>
  );
};

export default AdminPage;
