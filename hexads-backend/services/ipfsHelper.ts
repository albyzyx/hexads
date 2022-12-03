import { Web3Storage } from "web3.storage";

const client = new Web3Storage({ token: process.env.WEB3STORAGE_API_TOKEN });

export const fetchFromIPFS = async (CID: string) => {
  const res = await client.get(CID);
  console.log(res);
};
