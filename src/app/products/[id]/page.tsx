import React from 'react';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import SomeTab from '@/components/Body/BodyUi/OneProduct/SomeTab';


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
  const res = await fetch(`http://localhost:4000/api/products/product/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await res.json();
  console.log(data);
  return {
    id: data.id,
    name: data.name,
    price: data.finalPrice,
    description: data.description,
    imageUrl: data.image?.url || '', 
    // specifications: data.specifications || '',
    // orderInfo: data.orderInfo || '',
  };
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
      <div className='container mx-auto my-8 h-screen'>
        <h1 className="text-3xl font-bold mb-4 text-grey-1">{product.name}</h1>
        <div className="flex">
          {product.imageUrl ? (
            <img src={`http://localhost:4000${product.imageUrl}`} alt={product.name} className=" h-auto object-cover rounded-lg shadow-md" />
          ) : (
            <div className="w-1/2 h-auto object-cover rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
              <span>Image not available</span>
            </div>
          )}
          <div className="ml-8">
            <p className="text-xl font-semibold mb-4">{product.price} ₸</p>
           
          </div>
          
        </div>
        <div className="container  my-12 ">
        <SomeTab  
            description={product.description} 
            // specifications={product.specifications} 
            // orderInfo={product.orderInfo} 
              />
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