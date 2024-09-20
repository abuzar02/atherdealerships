"use client";
import { useEffect, useState } from 'react';
import AdminPanel from '../component/Admin';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userType = localStorage.getItem('userType'); // 'admin' or 'user'

    if (!loggedIn || userType !== 'admin') {
      router.push('/admin-login'); // Redirect to admin login if not an admin
    } else {
      setIsAdmin(true); // Allow access if admin
    }
  }, [router]);

  if (!isAdmin) {
    return null; // Optionally, add a loading spinner here
  }

  return (
    <>
      <AdminPanel />
    </>
  );
};

export default AdminPage;
