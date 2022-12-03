import { ethers } from "ethers";
// import { abi as ERC20ABI } from "@uniswap/v2-periphery/build/ERC20.json";
// import { ERC20 as ERC20Type } from "../contracts/typechain/ERC20";

// export const getTokenBalance = async (tokenAddress: string) => {
//   const web3Provider = await getWeb3Provider();
//   const address = await web3Provider.getSigner().getAddress();
//   const contract = new ethers.Contract(
//     tokenAddress,
//     ERC20ABI,
//     web3Provider.getSigner()
//   ) as ERC20Type;

//   const transaction = await contract.balanceOf(address);
//   const decimals = await contract.decimals();
//   const balance = ethers.utils.formatUnits(transaction, decimals);
//   return balance;
// };

// export const getTokenDecimals = async (
//   tokenAddress: string
// ): Promise<number> => {
//   const web3Provider = getProviderWithoutSigner();
//   const contract = new ethers.Contract(
//     tokenAddress,
//     ERC20ABI,
//     web3Provider
//   ) as ERC20Type;
//   const decimals = await contract.decimals();
//   return decimals;
// };

// export const approveSpend = async (
//   contractAddress: string,
//   spenderAddress: string
// ) => {
//   const web3Provider = await getWeb3Provider();
//   const contract = new ethers.Contract(
//     contractAddress,
//     ERC20ABI,
//     web3Provider.getSigner()
//   ) as ERC20Type;
//   const approved = await getAllowance(contractAddress, spenderAddress);
//   if (
//     approved.lt(ethers.utils.parseEther(Number.MAX_SAFE_INTEGER.toString()))
//   ) {
//     const transaction = await contract.approve(
//       spenderAddress,
//       ethers.constants.MaxUint256
//     );
//     await transaction.wait();
//     return transaction.hash;
//   } else {
//     return;
//   }
// };

// export const getAllowance = async (
//   tokenAddress: string,
//   spenderAddress: string
// ) => {
//   const web3Provider = await getWeb3Provider();
//   const signer = web3Provider.getSigner();
//   const contract = new ethers.Contract(
//     tokenAddress,
//     ERC20ABI,
//     signer
//   ) as ERC20Type;

//   const allowance = await contract.allowance(
//     await signer.getAddress(),
//     spenderAddress
//   );
//   return allowance;
// };
