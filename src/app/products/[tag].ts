// pages/api/products/[tag].ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { tag } = req.query;

    if (typeof tag !== 'string') {
        return res.status(400).json({ message: 'Invalid tag' });
    }

    try {
        const response = await fetch('http://localhost:4000/api/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();

        const filteredProducts = products.filter((product: any) => product.category.tags.includes(tag));
        res.status(200).json(filteredProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
}
