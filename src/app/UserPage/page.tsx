'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import ClientTabs from '@/components/Body/BodyUi/PersonPage/ClientTabs';
import Footer from '@/components/Body/Footer';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    console.log("Токен из localStorage:", token); 

    if (token) {
      fetch('http://localhost:4000/api/clients/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then(data => {
        setUserData(data); 
      })
      .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error);
        router.push('/');
      });
    } else {
      router.push('/'); 
    }
  }, [router]);

  if (!userData) {
    return null; 
  }


  const user = userData.user;

  return (
    <div>
      <nav className="top-0 left-0 right-0 z-50">
        <section className="bg-black-1">
          <div className="container mx-auto my-auto">
            <FirstSection />
          </div>
        </section>
        <section className="border-b-2">
          <div className="container mx-auto py-4">
            <SecondSection />
          </div>
        </section>
      </nav>

      <div className='container mx-auto my-24 h-screen'>
        <ClientTabs user={user} />
      </div>

      <footer className='p-24 bg-black-2'>
          <Footer/>
      </footer>
    </div>
  );
};

export default UserPage;
