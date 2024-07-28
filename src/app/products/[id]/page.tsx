import React from 'react';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface ProductPageProps {
  product: Product;
}

const fetchProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`http://localhost:4000/api/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
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
      <div className='container mx-auto my-8'>
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <div className="flex">
          <img src={`http://localhost:4000${product.imageUrl}`} alt={product.name} className="w-1/2 h-auto object-cover rounded-lg shadow-md" />
          <div className="ml-8">
            <p className="text-xl font-semibold mb-4">{product.price} ₸</p>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
      <footer className="p-24 bg-black-2">
        <Footer />
      </footer>
    </>
  );
};

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  return <ProductPage product={product} />;
}