import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/scrollbar';
import ClipLoader from 'react-spinners/ClipLoader';
import Link from 'next/link';
import LoadingDots from './loadingDots';
import { useCart } from '../CartContext';
import { useRecentlyViewed } from '../../../hooks/useRecentlyViewed';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  imageUrl?: string;
  onSale?: {
    isOnSale: boolean;
    salePrice?: number;
    saleDescription?: string;
  };
}

const SaleCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { addProductToRecentlyViewed } = useRecentlyViewed();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const fetchImageUrl = async (imageId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/media/${imageId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Fetched image data:', data);

      if (response.ok) {
        return data.url;
      } else {
        console.error('Error fetching image URL:', data.errors);
        return null;
      }
    } catch (error) {
      console.error('Error fetching image URL:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/on-sale');
        const data = await response.json();
        const saleProducts = data.docs || []; // Handle case where docs is undefined

        // Add imageUrl to each product
        const productsWithImages = await Promise.all(
          saleProducts.map(async (product: { image: { id: any }; name: any; imageUrl: any; }) => {
            if (product.image) {
              const imageId = typeof product.image === 'object' ? product.image.id : product.image;
              console.log('Fetching image for product:', product.name, 'with image ID:', imageId);
              product.imageUrl = await fetchImageUrl(imageId);
              console.log('Fetched image URL:', product.imageUrl);
            }
            return product;
          })
        );

        console.log('Fetched sale products with images:', productsWithImages);

        setProducts(productsWithImages);
      } catch (error) {
        console.error('Error fetching sale products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSaleProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto text-center my-auto mt-96">
        <ClipLoader
          color="red"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="text-center font-semibold text-grey-1 text-2xl mt-12">
          Ищем продукты по акции <LoadingDots />
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-grey-5 font-semibold mb-12">Товары по акции</h2>
      <Swiper
        modules={[Pagination, Parallax, Scrollbar, Autoplay]}
        parallax={true}
        speed={500}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: 'url(/path-to-your-background-image.jpg)',
            backgroundSize: 'cover',
          }}
          data-swiper-parallax="-23%"
        ></div>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link key={product.id} href={`/products/${product.id}`}>
              <div 
                className="border rounded-lg p-4 shadow-xl hover:transition-all cursor-pointer"
                onClick={() => addProductToRecentlyViewed(product)}  
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
                      <span className="line-through">{product.price} KZT</span>
                      <span className="text-red-500 ml-2">{product.onSale.salePrice} KZT</span>
                    </>
                  ) : (
                    <>{product.price} KZT</>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleCarousel;
