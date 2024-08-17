'use client';

import { useState, useEffect } from 'react';
import { firstHeadItem } from '../../constant/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Button } from '@nextui-org/react';
import ToolTipUI from './ElementUI/TooltipUI';
import Link from 'next/link';
import { useDisclosure } from "@nextui-org/react";
import LoginModal from '../Body/Auth/LoginModal';
import { useRouter } from 'next/navigation';
import UserToolTip from '@/components/Body/Auth/UserToolTip';

const FirstSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
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
          console.log('User data fetched successfully:', response);
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных пользователя:', error);
        localStorage.removeItem('token');
        router.push('/login');
      });
    }
  }, [router]);

  return (
    <nav className="text-white flex font-rubik justify-between items-center py-2 text-sm font-normal">
      <section className='flex items-center'>
        <FontAwesomeIcon className='py-1 px-4 mx-2 rounded-full bg-grey-1' icon={faLocationDot} />
        <Tooltip showArrow={true} className='cursor-pointer' content={<ToolTipUI />}>
          Алмата
        </Tooltip>
      </section>
      <div className="hidden md:flex relative items-center">
        {firstHeadItem.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className="font-normal text-sm font-rubik relative block mx-4 group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full group-hover:transition-all"></span>
          </Link>
        ))}
      </div>
      {user ? (
        <Tooltip 
          showArrow={true}
          placement="bottom"
          content={<UserToolTip user={user} />} 
          className='cursor-pointer'
        >
          <div className='flex items-center p-0 m-0 text-white cursor-pointer'>
            <FontAwesomeIcon className='p-1 mx-2' icon={faUser} />
            <p className='my-auto'>{user.name || 'Пользователь'}</p>
          </div>
        </Tooltip>
      ) : (
        <Button onPress={onOpen} className='flex items-center p-0 m-0 bg-transparent text-white'>
          <FontAwesomeIcon className='p-1 mx-2' icon={faUser} />
          <p className='my-auto'>Личный кабинет</p>
        </Button>
      )}
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </nav>
  );
};

export default FirstSection;
