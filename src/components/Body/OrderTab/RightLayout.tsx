import { useState } from 'react';

const RightLayout = ({ quantity, totalPrice }) => { 
    if (!quantity || !totalPrice) return null;

    return (
        <>
            <div  className="bg-grey-2 p-4 text-grey-1 rounded-xl">
                 <h4 className='text-3xl font-semibold'>Ваш заказ</h4>
                <div>
                    <p className='text-lg py-2 font-base'>Количество товаров: {quantity}</p>
                    <p className='text-lg py-2 font-base'>Общая цена: {totalPrice} ₸</p>
                </div>
            </div>
        </>
    )
 }

export default RightLayout;