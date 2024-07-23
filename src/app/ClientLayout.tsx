'use client';
import React from 'react';
import { CartProvider } from '../components/Body/CartContext';
import ClientOnly from './ClientOnly';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <CartProvider>
        {children}
      </CartProvider>
    </ClientOnly>
  );
}
