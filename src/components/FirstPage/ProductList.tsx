
import { useState, useEffect, CSSProperties } from "react";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Image from 'next/image';
import PaginationComponent from '../Body/BodyUi/pagination';
import LoadingDots from '../Body/BodyUi/loadingDots';
import { useCart } from '../Body/CartContext';



interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
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
          <div className=''>
            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
                {products.map(product => (
                  <div key={product.id} className="border rounded-lg p-4 shadow-xl hover:transition-all cursor-pointer">
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
                    <p className="text-grey-3 text-xl">{product.price} KZT</p>
                    <div className='container mx-auto flex justify-between pt-4 justify-items-center mt-12 '>
                      <div className='p-2 rounded-2xl bg-grey-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddToCart(product)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-400 size-12 p-2 hover:text-red-1 ease-out duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                      </div>
                      <button className='p-2 rounded-2xl mx-4 font-bold w-full text-lg text-center bg-red-1 text-white'  >Купить</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='container mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1/2 mx-auto text-grey-3 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <p className="text-3xl text-center text-grey-1 font-semibold bg-white h-screen ">Пока не существует продукции по этому разделу </p>
              </div>
            )}
            <div className="flex justify-center mt-8">
              <PaginationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
