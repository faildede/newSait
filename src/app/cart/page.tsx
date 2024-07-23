'use client';
import React from 'react';
import { useCart } from '../../components/Body/CartContext';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';

const CartPage = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, getTotalPrice } = useCart();
  const totalWithoutDiscount = getTotalPrice();
  const discount = 1016; 
  const totalPrice = totalWithoutDiscount - discount;
  return (
    <section>
      <nav className="top-0 left-0 right-0 z-50">
        <section className='bg-black-1'>
          <div className='container mx-auto my-auto'>
            <FirstSection />
          </div>
        </section>
        <section className='border-b-2'>
          <div className='container mx-auto py-4'>
            <SecondSection />
          </div>
        </section>
      </nav>
      <div className="bg-grey-2 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl mb-6 text-black-1 font-semibold">Ваша Корзина</h1>
          {cart.length === 0 ? (
            <p className="text-xl">Ваша корзина пуста</p>
          ) : (
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3">
                {cart.map((item) => (
                  <div key={item.product.id} className="mx-2 border-t-2 py-4 mb-4 flex">
                    <img
                      src={`http://localhost:4000${item.product.imageUrl}`}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="p-4 flex w-full justify-between ">
                      <div className='flex'>
                        <div className='px-4'>
                        <h2 className="text-xl font-normal mb-2 w-80 text-grey-4 ">{item.product.name}</h2>
                        <p className="text-black-2 mb-1">{item.product.price} ₸</p>
                        </div>
                        <div className="flex items-center mb-1 ">
                          <button
                            onClick={() => decreaseQuantity(item.product.id)}
                            className=" text-gray-700 px-2 rounded"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                            </svg>
                          </button>
                          <span className="mx-2 bg-white py-2 px-6 rounded-lg text-black-2 font-medium text-lg">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.product.id)}
                            className=" text-gray-700 px-2 rounded"
                          >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>

                          </button>
                        </div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => removeFromCart(item.product.id)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={40} className="size-6 cursor-pointer text-grey-3 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full md:w-1/3 px-2">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  
                  <ul className="mb-4">
                    <li className="flex justify-between my-2">
                      <span className="relative text-xl font-light text-grey-4">
                        Количество товаров:
                        <span className="" ></span>
                      </span>
                      <span className="">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
                    </li>
                    <li className="flex justify-between my-2">
                      <span className="relative text-xl font-light text-grey-4">
                        Сумма без скидки:
                        <span className="" ></span>
                      </span>
                      <span className="">{totalWithoutDiscount} KZT</span>
                    </li>
                    <li className="flex justify-between my-2">
                      <span className="relative text-xl font-light text-grey-4">
                        Скидка:
                        <span className="" ></span>
                      </span>
                      <span className="">{discount} KZT</span>
                    </li>
                    <li className="flex justify-between ">
                      <span className="relative text-xl font-light text-grey-4">
                        Итого:
                        <span className="" ></span>
                      </span>
                      <span className="font-thin text-xl">{totalPrice} KZT</span>
                    </li>
                  </ul>
                
                  <button className="bg-red-1 text-white text-xl font-semibold my-4 px-4 py-2 rounded w-full">
                    Перейти к оформлению
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
