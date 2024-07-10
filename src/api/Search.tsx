import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SearchProducts, SearchResult, SearchProps } from '@/types';
import {Spinner} from '@nextui-org/react';
import { useRouter, usePathname } from 'next/dist/client/components/navigation';

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
			} catch (error) {
				console.error('Error fetching products:', error);
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

	return (
		<div>
			{loading ? (
				<Spinner label="Загрузка..." color="danger" labelColor="primary" />
			) : (
				<div className="space-y-4">
					{products.map((item) => (
						<div
							key={item.id}
							className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow transition-shadow duration-200 ease-in-out cursor-pointer hover:bg-gray-700 relative"
							onClick={() => handleProductClick(item.id)}
						>
							<div className="flex-shrink-0">
								<Image
									src={item.imageUrl}
									alt={item.name}
									width={80}
									height={80}
									className="rounded-full"
									unoptimized 
								/>
							</div>
							<p className="flex-grow text-lg font-medium relative overflow-hidden">
								<span className="absolute h-0.5 bg-red-500 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
								{item.name}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
	
};

export default Search;
