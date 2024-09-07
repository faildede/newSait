'use client';
import React, { useState } from 'react';
import { useCart } from '@/components/Body/CartContext';
import { useRouter } from 'next/navigation';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import InfoTab from '@/components/Body/OrderTab/InfoTab';
import DeliveryTab from '@/components/Body/OrderTab/DeliveryTab';
import OrderProduct from '@/components/Body/OrderTab/OrderProduct';

const OrderPage = () => {
  const { cart, getTotalPrice, increaseQuantity, decreaseQuantity } = useCart();
  const router = useRouter();

  const [clientType, setClientType] = useState('individual');
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
    email: '',
    inn: '',
    deliveryMethod: 'pickup',
    address: '',
    comment: '',
    city: '',
    street: '',
  });

  const [error, setError] = useState(''); // State для обработки ошибок

  // Валидация данных перед отправкой
  const validateForm = () => {
    const emailTrimmed = orderDetails.email.trim();
    const phoneTrimmed = orderDetails.phone.trim();
    const fullNameTrimmed = `${orderDetails.surname} ${orderDetails.name}`.trim();

    if (!fullNameTrimmed || !orderDetails.surname.trim() || !emailTrimmed || !phoneTrimmed) {
      setError('Пожалуйста, заполните все обязательные поля.');
      return false;
    }

    // Валидация email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(emailTrimmed)) {
      setError('Пожалуйста, введите действительный адрес электронной почты.');
      return false;
    }

    // Проверка на наличие товаров
    if (!cart || cart.length === 0) {
      setError('Корзина не может быть пустой.');
      return false;
    }

    // Валидация адреса, если выбрана доставка
    if (orderDetails.deliveryMethod === 'delivery' && !orderDetails.address.trim()) {
      setError('Для доставки необходимо указать адрес.');
      return false;
    }

    setError('');
    return true;
  };

  const handleOrderSubmit = async () => {
    // Проверка валидации формы
    if (!validateForm()) {
      return;
    }
  
    // Подготовка данных для заказа
    const orderData = {
      clientType: clientType,
      fullName: `${orderDetails.surname} ${orderDetails.name} ${orderDetails.patronymic}`,
      surname: orderDetails.surname,
      email: orderDetails.email,
      phone: orderDetails.phone,
      deliveryMethod: orderDetails.deliveryMethod,
      address: orderDetails.deliveryMethod === 'delivery' ? orderDetails.address : null,
  
      products: cart.map(item => ({
        product: item.product.id,  
        quantity: item.quantity     
      })),
      totalPrice: getTotalPrice(),  
      status: 'pending',
      additionalDetails: orderDetails.comment,
    };
  
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      };
  
      const res = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers,
        body: JSON.stringify(orderData),
      });
  
      if (res.ok) {
        const createOrder = await res.json();
        router.push(`/AfterOrder?orderId=${createOrder.orderId}`);
      } else {
        const errorData = await res.json();
        setError(errorData.message || 'Не удалось создать заказ.');
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      setError('Произошла ошибка при создании заказа.');
    }
  };

  const handleQuantityChange = (productId, newQuantity, currentQuantity) => {
    if (newQuantity > currentQuantity) {
      increaseQuantity(productId);
    } else if (newQuantity < currentQuantity && currentQuantity > 1) {
      decreaseQuantity(productId);
    }
  };

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
      <div className="container mx-auto flex justify-between">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-semibold text-grey-1 py-12">Оформление заказа</h1>

          {error && <p className="text-red-600 mb-4">{error}</p>} 

          <div>
            <h4 className="text-2xl md:text-3xl font-semibold text-grey-1 py-4">Детали заказа</h4>
            <InfoTab 
              onInputChange={(e) => setOrderDetails({ 
                ...orderDetails, 
                [e.target.name]: e.target.value.trim() 
              })} 
              setClientType={setClientType} 
            />
          </div>

          <div className="my-12">
            <h4 className="text-3xl font-semibold text-grey-1 py-4">Доставка</h4>
            <DeliveryTab 
              handleInputChange={(e) => setOrderDetails({ 
                ...orderDetails, 
                [e.target.name]: e.target.value.trim() 
              })} 
            />

            <div className="my-24">
              <h4 className="text-3xl font-semibold text-grey-1 py-4">Товары в заказе</h4>
              {cart.map(item => (
                <OrderProduct 
                  key={item.product.id} 
                  product={item.product} 
                  onQuantityChange={(newQuantity) => handleQuantityChange(item.product.id, newQuantity, item.quantity)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-grey-2 p-12 my-12 rounded-xl">
        <div className="text-lg text-gray-700 mb-4">
          <p className="flex justify-between mb-2">
            <span>Количество товара</span>
            <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Сумма без скидки</span>
            <span>{getTotalPrice()} ₸</span> 
          </p>
        </div>

        <button 
          className="bg-red-600 text-white w-96 items-right py-3 text-xl font-semibold rounded-lg"
          onClick={handleOrderSubmit}
        >
          Заказать
        </button>
      </div>
      <footer className="p-24 bg-black-2">
        <Footer />
      </footer>
    </div>
  );
};

export default OrderPage;
