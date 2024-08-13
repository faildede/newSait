import { useState, useEffect, CSSProperties } from "react";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Image from 'next/image';
import Link from 'next/link';
import PaginationComponent from '../Body/BodyUi/pagination';
import LoadingDots from '../Body/BodyUi/loadingDots';
import { useCart } from '../Body/CartContext';
import { useRecentlyViewed } from '../../hooks/useRecentlyViewed';
import { useRouter } from "next/router";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  onSale?: {
    isOnSale: boolean;
    salePrice?: number;
    saleDescription?: string;
  };
}

interface ProductcatalogProps {
  tag: string;
  name: string;
  ImageUrl: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ProductCatalog: ProductcatalogProps[] = [
  { tag: 'welding equipment', name: 'Сварочные аппараты', ImageUrl: '/categoryImage/aparat.svg' },
  { tag: 'Submerged Welding Equipment', name: 'Оборудование для резки', ImageUrl: '/categoryImage/apparatDlyaRezk.svg' },
  { tag: 'Flow meters, reducers', name: 'Расходомеры, редукторы', ImageUrl: '/categoryImage/Rashod.svg' },
  { tag: 'Burners. Spare parts', name: 'Горелки, Запасные части', ImageUrl: '/categoryImage/Gorelki.svg' },
  { tag: 'Welding materials', name: 'Сварочные материалы', ImageUrl: '/categoryImage/Provolka.svg' },
  { tag: 'contact-welding-machines', name: 'Машины контактной сварки', ImageUrl: '/categoryImage/Contact.svg' },
  { tag: 'equipment-for-flux-welding', name: 'Оборудование для сварки под флюсом', ImageUrl: '/categoryImage/flus.svg' },
  { tag: 'Metal bending machines', name: 'Металлогибочные станки', ImageUrl: '/categoryImage/MetalGib.svg' },
  { tag: 'automation of welding processes', name: 'Автоматизация сварочных процессов', ImageUrl: '/categoryImage/avtoMat.svg' },
  { tag: 'Welding accessories Protective equipment', name: 'Сварочные аксессуары, cредства защиты', ImageUrl: '/categoryImage/Maska.svg' },
  { tag: 'Laser', name: 'Лазер', ImageUrl: '/categoryImage/secondLaser.svg' },
  { tag: 'Spare parts', name: 'Запасные части', ImageUrl: '/categoryImage/Shatyn.svg' },
];

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('welding equipment');
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { addToCart } = useCart();
  const { addProductToRecentlyViewed } = useRecentlyViewed();
  // const router = useRouter();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const fetchProducts = async (tag: string, page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/api/products/tag/${tag}?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data: { docs: Product[], totalPages: number } = await response.json();
      console.log('Fetched products:', data.docs); 
      setProducts(data.docs);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProducts(selectedTag, currentPage);
  }, [selectedTag, currentPage]);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  // const handleRoute = (id: string) => { 
  //   router.push(`/products/${id}`);
  // };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderMenu = (items: ProductcatalogProps[]) => (
    <ul className="flex flex-wrap gap-4 mb-8">
      {items.map(item => (
        <li key={item.tag} className="flex flex-col items-center">
          <div className={`flex px-4 cursor-pointer py-2 rounded ${selectedTag === item.tag ? 'bg-red-1 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTagClick(item.tag)}
          >
            {item.ImageUrl && (
              <Image src={item.ImageUrl} alt={item.name} width={40} height={40} className="w-16 h-16 object-cover mt-2" />
            )}
            <button className='font-medium text-sm mx-2'>
              {item.name}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto p-4">
      <nav>
        {renderMenu(ProductCatalog)}
      </nav>
      <div>
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
                  <div key={product.id} className="bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg">
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
                          <div className="absolute top-2 right-2 bg-red-1 text-white px-2 py-1 rounded">
                            Скидка на товар
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <h4 className="text-lg text-black-1 font-semibold mb-2 border-b-2">{product.name}</h4>
                      <p className="text-grey-3 text-xl mb-2">
                        {product.onSale?.isOnSale ? (
                          <div className="flex flex-col">
                            <p className="text-red-1 my-4"> <span className='text-grey-3'>Цена поскидке: </span> {product.onSale.salePrice} ₸</p>
                            <p className=" text-base text-grey-3">Старая цена: <span className='line-through'>{product.price}</span>  ₸</p>
                          </div>
                        ) : (
                          <span>{product.price} ₸</span>
                        )}
                      </p>
                      {product.manufacturer && (
                        <p className="text-grey-3 text-sm mb-2">Производитель: {product.manufacturer}</p>
                      )}
                      {product.onSale?.isOnSale && (
                        <p className="text-sm text-red-1 mb-4">{product.onSale.saleDescription}</p>
                      )}
                      <button
                        className={`p-2 rounded-lg text-white text-lg ${product.availability ? 'bg-green-500' : 'bg-red-1'} `}
                        disabled={!product.availability}
                      >
                        {product.availability ? 'В наличии' : 'Нет в наличии'}
                      </button>
                      <div className='container mx-auto flex justify-between pt-4 justify-items-center mt-12'>
                        <div className='p-2 rounded-2xl bg-grey-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddToCart(product)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </div>
                        <button className='p-2 rounded-2xl mx-4 font-bold w-full text-lg text-center bg-red-1 text-white'>Купить</button>
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
      </div>
    </div>
  );
};

export default ProductList;
