'use client';
import React from 'react';
import { CartProvider } from '../components/Body/CartContext';
import ClientOnly from './ClientOnly';
import NextTopLoader from 'nextjs-toploader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <CartProvider>
      <NextTopLoader />
        {children}
      </CartProvider>
    </ClientOnly>
  );
}
