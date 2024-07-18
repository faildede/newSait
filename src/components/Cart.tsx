'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../slices/cartSlice';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <div>
                  <img src={item.imageUrl} alt={item.name} width={50} height={50} />
                  <span>{item.name}</span>
                  <span>{item.price} KZT</span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <p>Total Amount: {totalAmount} KZT</p>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
