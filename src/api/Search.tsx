import { useState, useEffect } from "react";
import Image from "next/image";
import { SearchProducts, SearchResult, SearchProps } from "@/types";
import {Spinner} from "@nextui-org/react";
import { useRouter, usePathname } from "next/dist/client/components/navigation";

const Search = ({ term }: SearchProps) => {
  const [products, setProducts] = useState<SearchProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const encodedTerm = encodeURIComponent(term);
        const response = await fetch(`http://localhost:4000/api/products/one/${encodedTerm}`)
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: SearchResult = await response.json();
        setProducts(data.search.docs);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (term) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [term]);

  const handleProductClick = (productId: string) => {
    push(`/product/${productId}`);
  };
  console.log(products);
  return (
    <div className="">
    {loading ? (
      <Spinner label="Загрузка..." color="danger" labelColor="primary" />
    ) : (
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center space-x-4 bg-white p-4 hover:bg-gray-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
    {product.image && product.image.sizes && product.image.sizes.thumbnail && (
  <div className="flex-shrink-0">
    <img
      src={product.image}
      alt={product.name}
      width={80}
      height={80}
      className="rounded-full"
    />
  </div>
)}
            <p className="flex-grow text-lg font-medium">{product.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default Search;