'use client'

import { useCart } from '@/components/Body/CartContext';

const CardPaymant = ({ price, availability, manufacturer, product }) => {
    
    const { addToCart } = useCart();
    
    const handleAddToCart = (product) => {
        addToCart(product);
      };

    return (    
        <>
            <div className="bg-grey-2 rounded-xl">
                <div className="container mx-auto my-auto p-16">
                    <div className=" py-6 my-4">
                        <div className="flex items-center">
                            <p className="text-lg  text-black-3">Производитель: {manufacturer}</p>
                        </div>
                       
                        <div className="flex items-center">
                        {product.onSale?.isOnSale ? (
                                <div className="flex flex-col text-lg">
                                    <p className=" my-2 font-base">
                                    <span className="text-black-3 ">Цена по скидке: </span> <span className='text-2xl font-base text-red-1'>{product.onSale.salePrice}</span> ₸
                                    </p>
                                    <p className=" text-black-3 relative text-lg inline-block">
                                        Старая цена:  
                                    <span className="relative inline-block px-2">
                                        <span className="relative"> {product.price} ₸</span>
                                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-red-1 transform -rotate-12 translate-y-[-50%]"></span>
                                    </span>
                                    </p>
                                </div>
                                ) : (
                                <span>{product.price} ₸</span>
                                )}

                                
                        </div>

                    </div>

                        <button
                            className={`p-2 rounded-lg text-white w-1/2 text-lg ${
                            product.availability === 'in_stock' ? 'bg-green-500' : 'bg-red-1'
                            }`}
                            disabled={product.availability !== 'in_stock'}
                            >
                                {product.availability === 'in_stock' ? 'В наличии' : 'Нет в наличии'}
                            </button>
                    <div className='container mx-auto flex justify-between pt-4 justify-items-center '>
                        <div className='p-2 rounded-2xl border-2 hower:bg-white bg-grey-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddToCart(product)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2  hover:text-red-1 ease-out duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </div>
                        <button className='p-2 rounded-2xl mx-4 font-bold w-full text-lg text-center bg-red-1 text-white'>Купить</button>
                      </div>
                </div>
            </div>
        </>
    )
}

export default CardPaymant;