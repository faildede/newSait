import { useEffect, useState } from 'react';
import Image from 'next/image';

const ViewedProducts = () => {
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('viewedProducts');
    if (storedProducts) {
      setViewedProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="container mx-auto my-auto">
      <h2 className="text-2xl font-semibold text-black-2">Вы просматривали эти продукты</h2>
      <div className="grid gap-6 grid-cols-4">
        {viewedProducts.map((product, index) => (
          <div key={index} className="flex flex-col items-center mt-12">
            <Image src={product.imageUrl} width={150} height={150} alt={product.name} />
            <h3 className="text-xl font-semibold text-black-3 my-4">{product.name}</h3>
            <p className="text-lg font-thin text-grey-3 my-4">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewedProducts;
