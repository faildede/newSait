'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CatalogLayout from '@/components/CatalogPage/CatalogLayout';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import { useCart } from '@/components/Body/CartContext';
import ClipLoader from 'react-spinners/ClipLoader';
import LoadingDots from '@/components/Body/BodyUi/loadingDots';
import Footer from '@/components/Body/Footer';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  onSale?: {
    isOnSale: boolean;
    salePrice?: number;
    saleDescription?: string;
  };
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`http://localhost:4000/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.docs.map((product: any) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
  }));
}

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      <nav className=" top-0 left-0 right-0 z-50">
        <section className='bg-black-1'>
          <div className='container mx-auto my-auto'>
            <FirstSection />
          </div>
        </section>
        <section className='border-b-2'>
          <div className='container mx-auto py-4 '>
            <SecondSection />
          </div>
        </section>
      </nav>
      <div className='container mx-auto'>
        <CatalogLayout>
          <h1 className="text-2xl font-bold mb-4">Все продукты</h1>
          {loading ? (
            <div className='h-screen container mx-auto my-auto mt-96'>
              <ClipLoader
                color="red"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="text-center font-semibold text-grey-1 text-2xl mt-12">
                Подыскиваем нужные вам продукты<LoadingDots /> 
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-3 col-span-6 gap-4'>
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div 
                    className="border rounded-lg p-4 shadow-xl hover:transition-all cursor-pointer"
                  >
                    <div className="relative w-full bg-white h-72 mb-4 rounded">
                      {product.imageUrl ? (
                        <img
                          src={`http://localhost:4000${product.imageUrl}`}
                          alt={product.name}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded"></div>
                      )}
                    </div>
                    <h4 className="text-lg text-black-1 font-semibold mb-2 mt-4">{product.name}</h4>
                    <p className="text-grey-3 text-xl">
                      {product.onSale?.isOnSale ? (
                        <>
                          <span className="line-through">{product.price} ₸</span>
                          <span className="text-red-500 ml-2">{product.onSale.salePrice} ₸</span>
                        </>
                      ) : (
                        <>{product.price} ₸</>
                      )}
                    </p>
                    {product.onSale?.isOnSale && (
                      <p className="text-sm text-red-500 mt-2">{product.onSale.saleDescription}</p>
                    )}
                    <div className='container mx-auto flex justify-between pt-4 justify-items-center mt-12 '>
                      <div className='p-2 rounded-2xl bg-grey-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddToCart(product)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </div>
                      <button className='p-2 rounded-2xl mx-4 font-bold w-full text-lg text-center bg-red-1 text-white'>Купить</button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CatalogLayout>
      </div>
      <footer className=" p-24 bg-black-2">
        <Footer />
      </footer>
    </>
  );
};

export default AllProductsPage;
