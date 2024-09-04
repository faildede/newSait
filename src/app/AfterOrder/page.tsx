'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import Link from 'next/link';

const AfterOrder = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [orderDetails, setOrderDetails] = useState(null);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  useEffect(() => {
    const checkUserRegistration = () => {
      if (localStorage.getItem('token')) {
        setIsUserRegistered(true);
      }
    };

    checkUserRegistration();
  }, []);

  useEffect(() => {
    if (!orderId) {
      console.error('Order ID is missing');
      return;
    }
    console.log('Received orderId:', orderId);

    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/orders/${orderId}`);
        const data = await response.json();
        console.log('Order details received:', data);
        setOrderDetails(data);
      } catch (error) {
        console.error('Failed to fetch order details', error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!orderDetails) {
    return (<p>Загрузка...</p>);
  }

  return (
    <>
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

      <div className="h-screen">
        <div className="container mx-auto my-24">
          <h6 className="text-4xl font-bold text-grey-1 text-center">Спасибо за ваш заказ!</h6>
          <p className="text-grey-1 text-xl py-4 w-9/12">Ваш заказ был успешно оформлен. Чуть позже с вами созвониться наш менеджер для дополнительной информации. Ниже приведена информация о заказе:</p>

          <div className="bg-white ">
            <h4 className="text-3xl font-semibold text-grey-4 py-2">Информация о заказе</h4>
            <div className='flex gap-6 text-lg'>
              <div>
                <p className='text-grey-5'><strong className='text-xl px-2 text-grey-1'>Имя клиента:</strong> {orderDetails.fullName}</p>
                <p className='text-grey-5'><strong className='text-xl px-2 text-grey-1'>Телефон:</strong> {orderDetails.phone}</p>
                <p className='text-grey-5'> <strong className='text-xl px-2 text-grey-1'>E-mail:</strong> {orderDetails.email}</p>
                <p className='text-grey-5'><strong className='text-xl px-2 text-grey-1'>Метод доставки:</strong> {orderDetails.deliveryMethod === 'delivery' ? 'Доставка' : 'Самовывоз'}</p>
              </div>
              <div>
                {orderDetails.deliveryMethod === 'delivery' && (
                  <p className='text-grey-5'><strong className='text-xl px-2 text-grey-1'>Адрес доставки:</strong> {orderDetails.address}</p>
                )}
                <h5 className="text-xl font-semibold ">Товары в заказе:</h5>
                <ul>
                  {orderDetails.products.map((product, index) => (
                    <li key={index} className="mb-2 text-grey-5">
                      {product.product.name} - {product.quantity} шт.
                    </li>
                  ))}
                </ul>
                <p className="text-xl font-bold mt-4">Итоговая сумма: {orderDetails.totalPrice} ₸</p>
              </div>
            </div>
          </div>

          <p className="text-grey-1 text-xl mt-8">Если у вас возникли вопросы, пожалуйста, свяжитесь с нами по телефону <Link href="tel:+77077001745" className="hover:underline">+7 (707) 700-17-45</Link> или напишите на почту <Link href="mailto:office@kgamma.kz" className="hover:underline">office@kgamma.kz</Link>.</p>
            <div className='flex text-xl font-bold'>
              <Link href="/" className="text-white bg-black-1 py-4 px-6 rounded-lg mt-8 block  mx-auto text-center">
                На главную
              </Link>
              {isUserRegistered ? (
              <Link href="/UserPage" className="text-white bg-red-1 py-4 px-6 rounded-lg mt-8 block mx-auto text-center">
                Перейти в свой аккаунт
              </Link>
            ) : (
              <Link href="/signup" className="text-white bg-red-1 py-4 px-6 rounded-lg mt-8 block mx-auto text-center">
                Создать аккаунт
              </Link>
            )}
            </div>
        
        </div>
      </div>

      <footer className='p-24 bg-black-2'>
        <Footer />
      </footer>
    </>
  );
};

export default AfterOrder;