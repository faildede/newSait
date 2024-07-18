import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tag, page = 1, limit = 10 } = req.query;
  const filteredProducts = products.filter(product => product.tag === tag);
  const startIndex = (parseInt(page as string) - 1) * parseInt(limit as string);
  const endIndex = startIndex + parseInt(limit as string);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.status(200).json({
    docs: paginatedProducts,
    totalPages: Math.ceil(filteredProducts.length / parseInt(limit as string)),
  });
}