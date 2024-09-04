import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Spinner } from '@nextui-org/react';
import LoadingDots from '@/components/Body/BodyUi/loadingDots';

const Search = ({ term }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const pathname = usePathname();
  const { push } = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const encodedTerm = encodeURIComponent(term);
        const baseURL = 'http://localhost:4000';
        const response = await fetch(`${baseURL}/api/products/one/${encodedTerm}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const updatedProducts = data.search.map(product => ({
          ...product,
          imageUrl: product.imageUrl.startsWith('http') ? product.imageUrl : `${baseURL}${product.imageUrl}`
        }));
        setProducts(updatedProducts);
        setIsDropdownVisible(true); 
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false); //false
      }
    };

    if (term) {
      fetchProducts();
    } else {
      setProducts([]);
      setIsDropdownVisible(false);
    }
  }, [term]);

  const handleProductClick = (productId) => {
    push(`/products/${productId}`);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      {loading ? (
        <div className="min-h-screen bg-white  items-center p-12">
          <Spinner  color="danger" labelColor="danger" className='text-center'/> 
          
          <p className="text-center font-semibold text-grey-3 text-lg ">Подыскиваем нужные вам продукты<LoadingDots /> </p>
        </div>
      ) : products.length > 0 && isDropdownVisible ? (
        <div className="p-2">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white my-4 p-4 border-2 rounded-lg cursor-pointer relative"
              onClick={() => handleProductClick(item.id)}
            >
              <div className="flex-shrink-0 my-2">
                <Image
                  src={item.imageUrl || '/placeholder.png'}
                  alt={item.name}
                  width={80}
                  height={80}
                  className=""
                  unoptimized
                />
              </div>
              <p className="flex-grow text-lg font-medium px-4 relative overflow-hidden">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      ) : <div className="container mx-auto flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-12">
	  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" height="96" width="96" className="text-grey-3 mb-4">
		<path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
	  </svg>
	  <p className="text-center text-lg font-medium text-grey-3 px-12">
		К сожалению, мы ничего не нашли по вашему запросу
	  </p>
	  </div>
	  }
    </div>
  );
};

export default Search;





