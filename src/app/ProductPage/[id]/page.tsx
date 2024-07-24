// pages/products/[id].tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  description?: string;
}

interface ProductPageProps {
  product: Product;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-black-2">{product.name}</h1>
      <Image src={product.imageUrl || '/placeholder.png'} width={600} height={400} alt={product.name} />
      <p className="text-2xl text-gray-700 mt-4">{product.price} KZT</p>
      <p className="text-lg text-gray-500 mt-2">{product.description}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  

  const response = await fetch(`http://localhost:4000/api/products/${id}`);
  const product: Product = await response.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
