// components/ProductList.tsx
import { useState, useEffect } from "react";
import menuItems from "../../constant/index";
import { MenuItem, Product } from "@/types";
import React from "react";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedTag, setSelectedTag] = useState<string>('welding-machines');

    const fetchProducts = async (tag: string) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/products/${tag}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data: Product[] = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(selectedTag);
    }, [selectedTag]);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
    };

    const renderMenu = (items: MenuItem[]) => (
        <ul>
            {items.map(item => (
                <li key={item.title}>
                    {item.tag && (
                        <a href="#" onClick={() => handleTagClick(item.tag!)}>
                            {item.title}
                        </a>
                    )}
                    {item.children && (
                        <ul>
                            {item.children.map(child => (
                                <li key={child.title}>
                                    {child.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <nav>{renderMenu(menuItems)}</nav>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <img src={product.image.sizes.thumbnail.url} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>{product.price} KZT</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductList;
