'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import CatalogLayout from '@/components/CatalogPage/CatalogLayout';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import ClipLoader from 'react-spinners/ClipLoader';
import LoadingDots from '@/components/Body/BodyUi/loadingDots';
import Link from 'next/link';
import { useCart } from '@/components/Body/CartContext';
import Footer from '@/components/Body/Footer';
import FilterComponent from '@/components/Body/BodyUi/filters/FilterComponent';
import PaginationComponent from '@/components/Body/BodyUi/pagination';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  manufacturer?: { name: string };
  onSale?: { isOnSale: boolean; salePrice: number; saleDescription: string };
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const fetchAllProducts = async (filters, page) => {
  let url = `http://localhost:4000/api/products/products`;
  const params = { ...filters, page };

  if (params.onSale === false) {
    delete params.onSale;
  }

  const queryString = new URLSearchParams(params).toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  const products = data.docs.map(product => ({
    id: product.id,
    name: product.name,
    price: product.finalPrice,
    imageUrl: product.imageUrl,
    manufacturer: product.manufacturer ? product.manufacturer.name : 'Unknown',
    onSale: product.onSale,
    availability: product.availability,
  }));

  return { products, totalPages: data.totalPages, minPrice: data.minPrice, maxPrice: data.maxPrice };
}

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({});
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const { products, totalPages, minPrice, maxPrice } = await fetchAllProducts(filters, currentPage);
        if (!isNaN(minPrice) && !isNaN(maxPrice)) {
          console.log(`Price range: ${minPrice} - ${maxPrice}`);
        } else {
          console.error('Не удалось определить диапазон цен:', minPrice, maxPrice);
        }
        setProducts(products);
        setTotalPages(totalPages);
        setMinPrice(isNaN(minPrice) ? 0 : minPrice);
        setMaxPrice(isNaN(maxPrice) ? 10000 : maxPrice);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [JSON.stringify(filters), currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <nav className="top-0 left-0 right-0 z-50">
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
          <div className='flex justify-between '>
            <FilterComponent
              onFilterChange={handleFilterChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
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
            <>
              <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
            <div
            key={product.id}
            className="bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg flex flex-col h-full"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative">
                {product.imageUrl ? (
                  <img
                    src={`http://localhost:4000${product.imageUrl}`}
                    alt={product.name}
                    className="w-full h-81 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-t-lg"></div>
                )}
                {product.onSale?.isOnSale && (
                  <div className="absolute top-2 right-2 text-base bg-red-1 text-white px-2 py-1 rounded">
                    Скидка на товар
                  </div>
                )}
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-lg text-black-1 font-semibold mb-2 border-b-2">{product.name}</h4>
              <p className="text-grey-3 text-xl mb-2 flex-grow">
                <div className="my-4">
                  {product.onSale?.isOnSale ? (
                    <div className="flex flex-col">
                      <p className="text-red-1 my-2">
                        <span className="text-grey-3">Цена по скидке: </span> {product.onSale.salePrice} ₸
                      </p>
                      <p className="text-base text-grey-3">
                        Старая цена: <span className="line-through">{product.price}</span> ₸
                      </p>
                    </div>
                  ) : (
                    <span>{product.price} ₸</span>
                  )}
                </div>
              </p>
              <div className="my-4">
                {product.manufacturer && (
                  <p className="text-grey-3 text-base mb-2">
                    Производитель: <span className="text-lg text-grey-3">{product.manufacturer}</span>
                  </p>
                )}
                {product.onSale?.isOnSale && (
                  <p className="text-sm text-red-1 mb-4">{product.onSale.saleDescription}</p>
                )}
              </div>
              <div className="flex flex-col justify-end mt-auto">
                <button
                  className={`p-2 rounded-lg text-white w-1/2 text-lg ${
                    product.availability === 'in_stock' ? 'bg-green-500' : 'bg-red-1'
                  }`}
                  disabled={product.availability !== 'in_stock'}
                >
                  {product.availability === 'in_stock' ? 'В наличии' : 'Нет в наличии'}
                </button>
                <div className="flex justify-between pt-4">
                  <div className="p-2 rounded-2xl bg-grey-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleAddToCart(product)}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                  <button className="p-2 rounded-2xl mx-4 font-bold w-full text-lg text-center bg-red-1 text-white">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <PaginationComponent
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
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