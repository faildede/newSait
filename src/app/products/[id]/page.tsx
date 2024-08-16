import React, { Suspense } from 'react';
import FirstSection from '@/components/Header/firstSection';
import SecondSection from '@/components/Header/secondSection';
import Footer from '@/components/Body/Footer';
import SomeTab from '@/components/Body/BodyUi/OneProduct/SomeTab';
import CardPaymant from '@/components/Body/BodyUi/OneProduct/CardPayment';


interface SliderItem {
  title: string;
  caption: string;
  id: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  slider: SliderItem[];
  manufacturer?: { name: string };
  onSale?: { isOnSale: boolean; salePrice: number; saleDescription: string };
  availability: number;
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


  const sliderData = [
    ...(Array.isArray(data.slider) ? data.slider : []),
    ...(Array.isArray(data.weldingEquipmentDetails?.slider) ? data.weldingEquipmentDetails.slider : []),
    ...(Array.isArray(data.laserEquipmentDetails?.slider) ? data.laserEquipmentDetails.slider : []),
  ];

  return {
    id: data.id,
    name: data.name,
    price: data.finalPrice,
    description: data.description,
    imageUrl: data.image?.url || '',
    slider: sliderData,
    manufacturer: data.manufacturer ? data.manufacturer : 'Unknown',
    onSale: data.onSale,
    availability: data.availability,
  };
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  console.log('Product data passed to component:', product);
  return (
    <>
      <nav className="top-0 left-0 right-0 z-50">
        <section className="bg-black-1">
          <div className="container mx-auto my-auto">
            <FirstSection />
          </div>
        </section>
        <section className="border-b-2">
          <div className="container mx-auto py-4">
            <SecondSection />
          </div>
        </section>
      </nav>
      <div className="container mx-auto my-8 ">
        <h1 className="text-3xl font-bold mb-4 text-grey-1">{product.name}</h1>
        <div className="flex justify-between container mx-auto ">
          {product.imageUrl ? (
            <img src={`http://localhost:4000${product.imageUrl}`} alt={product.name} className=" h-96 object-cover rounded-lg" />
          ) : (
            <div className="w-1/2 h-auto object-cover rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
              <span>Image not available</span>
            </div>
          )}
          <div className="ml-8">
          
            <CardPaymant 
              price={product.price}
              availability={product.availability}
              manufacturer={product.manufacturer?.name || 'Unknown'}
              product={product}
            />
          </div>
        </div>
        <div className="container my-12">
          <Suspense fallback={<div>Loading...</div>}>
            <SomeTab description={product.description} slider={product.slider} />
          </Suspense>
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