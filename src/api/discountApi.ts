import type { NextApiRequest, NextApiResponse } from 'next';

const PAYLOAD_SERVER_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL;

const getDiscounts = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(`${PAYLOAD_SERVER_URL}/api/discounts?depth=1`);
  const data = await response.json();
  res.status(200).json(data);
};

export default getDiscounts;
