import { useCart } from '@/components/Body/CartContext';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const OrderProduct = ({ product, onQuantityChange }) => {
    if (!product) return null;

    const [quantity, setQuantity] = useState(1); 
    const { removeFromCart, cartItems = [] } = useCart(); 
    const router = useRouter();

    useEffect(() => {
        onQuantityChange(quantity, product.price * quantity);
    }, [quantity, onQuantityChange, product.price]);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        if (cartItems.length <= 1) { 
            router.push('/');
        }
    };

    const imageUrl = product.image && product.image.url 
        ? `http://localhost:4000${product.image.url}` 
        : null;

    return (
        <div className="order-product-list">
            <div className="my-12 border p-4 rounded-xl">
                <div key={product.id} className="mb-4 flex">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={product.name} 
                            className="h-32 object-cover rounded-lg" 
                        />
                    ) : (
                        <div className="w-1/2 h-auto object-cover rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
                            <span>Image not available</span>
                        </div>
                    )}
                    <div className="p-4 flex w-full justify-between">
                        <div className='flex'>
                            <div className='px-4'>
                                <h2 className="text-xl font-normal mb-2 w-80 text-grey-4">{product.name}</h2>
                                <p className="text-black-2 mb-1">Цена за единицу: {product.finalPrice} ₸</p>
                            </div>
                            <div className="flex items-center mb-1">
                                <button
                                    onClick={decreaseQuantity}
                                    className="text-gray-700 px-2 rounded"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                                <span className="mx-2 bg-white py-2 px-6 rounded-lg text-black-2 font-medium text-lg">{quantity}</span>
                                <button
                                    onClick={increaseQuantity}
                                    className="text-gray-700 px-2 rounded"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleRemoveFromCart(product.id)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={40} className="size-6 cursor-pointer text-grey-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;