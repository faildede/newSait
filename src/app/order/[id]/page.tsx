'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import InfoTab from '@/components/Body/OrderTab/InfoTab';
import DeliveryTab from '@/components/Body/OrderTab/DeliveryTab';
import OrderProduct from '@/components/Body/OrderTab/OrderProduct';  
import { Textarea } from "@nextui-org/react";

const OrderPage = ({ params }) => {
  const router = useRouter();
  const { id: productId } = params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientType, setClientType] = useState('individual');  
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');


  const [orderDetails, setOrderDetails] = useState({
    fullName: '',
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

  
  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  const fetchProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setTotalPrice(data.finalPrice); 
    } catch (error) {
      console.error('Failed to fetch product', error);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    const newTotalPrice = product.finalPrice * newQuantity; 
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice);
  };

  const calculateDiscount = (price, finalPrice) => {
    if (!price || !finalPrice || price <= finalPrice) return 0;
    return price - finalPrice;
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name === 'city' || name === 'street') {
      setOrderDetails((prevState) => ({
        ...prevState,
        address: `${orderDetails.city}, ${orderDetails.street}`,
      }));
    }

    setOrderDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
 
  const handleOrderSubmit = async () => {
    const orderData = {
      clientType: clientType,
      fullName: `${orderDetails.surname} ${orderDetails.name} ${orderDetails.patronymic}`,
      surname: orderDetails.surname,  
      email: orderDetails.email,      
      phone: orderDetails.phone,
      deliveryMethod: orderDetails.deliveryMethod,
      address: orderDetails.deliveryMethod === 'delivery' ? orderDetails.address : null,

      products: [
        {
          product: product.id,
          quantity: quantity,
        }
      ],
      totalPrice: totalPrice,
      status: 'pending',
      additionalDetails: orderDetails.comment,
    };
  
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
      };
  
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
  
      const res = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(orderData),
      });
  
      if (res.ok) {
        const createOrder = await res.json();
        if (createOrder.orderId) {
          console.log('Redirecting to AfterOrder page with orderId:', createOrder.orderId);
          router.push(`/AfterOrder?orderId=${createOrder.orderId}`);
        } else {
          console.error('Order ID is missing');
        }
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('Failed to submit order', error);
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
      <div className='container mx-auto flex justify-between'>
        <div className='w-full'>
          <h1 className='text-3xl md:text-5xl font-semibold text-grey-1 py-12'>Оформление заказа</h1>

          <div>
            <h4 className='text-2xl md:text-3xl font-semibold text-grey-1 py-4'>Детали заказа</h4>
            <InfoTab onInputChange={handleInputChange} setClientType={setClientType} />
          </div>

          <div className='my-12'>
            <h4 className='text-3xl font-semibold text-grey-1 py-4'>Доставка</h4>
            <DeliveryTab handleInputChange={handleInputChange} />

            <div className='my-24'>
              <h4 className='text-3xl font-semibold text-grey-1 py-4'>Товары в заказе</h4>
              <OrderProduct product={product} onQuantityChange={handleQuantityChange} /> 
            </div>

          </div>
        </div>
      </div>
      <div className='container mx-auto bg-grey-2 p-12 my-12 rounded-xl'>
        <div className='text-lg text-gray-700 mb-4'>
          <p className='flex justify-between mb-2'>
            <span>Количество товара</span>
            <span>{quantity}</span>
          </p>
          <p className='flex justify-between mb-2'>
            <span>Сумма без скидки</span>
            <span>{product?.price || 0} ₸</span>
          </p>
          <p className='flex justify-between'>
            <span>Скидка</span>
            <span>-{calculateDiscount(product?.price, product?.finalPrice)} ₸</span>
          </p>
        </div>

        <div className='text-2xl font-semibold text-red-600 mb-6'>
          <p className='flex justify-between'><span>Итого</span><span>{totalPrice}</span></p>
        </div>

        <button
          className='bg-red-600 text-white w-96 items-right py-3 text-xl font-semibold rounded-lg'
          onClick={handleOrderSubmit}
        >
          Заказать
        </button>
      </div>
      <footer className='p-24 bg-black-2'>
        <Footer />
      </footer>
    </div>
  );
};

export default OrderPage;