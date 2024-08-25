'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/Body/CartContext';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import InfoTab from '@/components/Body/OrderTab/InfoTab';
import DeliveryTab from '@/components/Body/OrderTab/DeliveryTab';
import RightLayout from '@/components/Body/OrderTab/RightLayout';
import OrderProduct from '@/components/Body/OrderTab/OrderProduct';  // Исправлено название компонента



const OrderPage = ({ params }) => {
  const router = useRouter();
  const { id: productId } = params;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (newQuantity, newTotalPrice) => {
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice);
  };

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
      setTotalPrice(data.price); 
    } catch (error) {
      console.error('Failed to fetch product', error);
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
          <h1 className='text-5xl font-semibold text-grey-1 py-12'>Оформление заказа</h1>

          <div>
            <h4 className='text-3xl font-semibold text-grey-1 py-4'>
              Детали заказа
            </h4>
            <InfoTab />
          </div>

          <div className='my-12'>
            <h4 className='text-3xl font-semibold text-grey-1 py-4'>Доставка</h4>
            <DeliveryTab />

            <div className='my-24'>
              <p className='text-xl font-bold text-grey-1 py-2 '>По согласованию, менеджер свяжется с Вами  и уточнит все детали. Заказ можно хранить у нас бесплатно 
                12 месяцев. Привезем по потребности</p>
              <p className='text-xl font-bold text-black-1 py-2 '>Внимание! При заказе товаров, доставка которых осуществляется крупногабаритным транспортом, обязательно учитывайте 
                взмодность проезда транспорта!</p>
              <p className='text-lg font-base text-grey-1 py-2'>В случае отсутствия соответствующих подъездных путей, доставка будет осуществлена максимально близко к месту 
                планируемой выгрузки. Водитель вправе отказать в подъезде транспорта , если в случае его маневров может быть
                поврежден автомобиль, или нарушены установленные ПДД.</p>  
            </div>
            
            <div>
              <h4 className='text-3xl font-semibold text-grey-1 py-4'>Товары в заказе</h4>
              <OrderProduct product={product} onQuantityChange={handleQuantityChange} /> {/* Передаем handleQuantityChange */}
            </div>
          </div>
        </div>
        <div className='w-1/3  py-12'>
          <RightLayout quantity={quantity} totalPrice={totalPrice} />
        </div>
      </div>

      <footer className='p-24 bg-black-2'>
        <Footer />
      </footer>
    </div>
  );
};

export default OrderPage;
