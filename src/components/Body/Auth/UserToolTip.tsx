'use client';

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const UserToolTip = ({ user }) => {
  const router = useRouter();


  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
};


  return (
      <>
        <div className="p-8 flex flex-col ">
            <Link href="/UserPage" className="py-2 text-lg font-bold text-grey-1">Перейти в профиль</Link>
            <Link href="/UserPage" className="py-2 text-lg font-bold text-grey-1">Мои заказы</Link>
            <p className="py-2 text-lg font-bold text-grey-1">Статус заказа</p>

            <Button onClick={handleLogout} className="py-4 my-6 text-lg font-bold bg-red-1 text-white" >Выйти</Button>
        </div>
      </>
    );
  };
  
  export default UserToolTip;