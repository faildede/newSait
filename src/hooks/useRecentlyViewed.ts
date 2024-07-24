import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

const RECENTLY_VIEWED_KEY = 'recentlyViewedProducts';

export const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem(RECENTLY_VIEWED_KEY);
    if (storedProducts) {
      setRecentlyViewed(JSON.parse(storedProducts));
    }
  }, []);

  const addProductToRecentlyViewed = (product: Product) => {
    setRecentlyViewed((prev) => {
      const updated = [product, ...prev.filter((p) => p.id !== product.id)].slice(0, 5);
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return { recentlyViewed, addProductToRecentlyViewed };
};