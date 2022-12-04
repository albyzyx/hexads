import { BigNumber, ethers } from "ethers";
import { getWeb3Provider } from "./walletConnect";
import ERC20 from "../contracts/ERC20.json";

export const approveSpend = async (
  tokenAddress: string,
  spenderAddress: string
) => {
  const web3Provider = await getWeb3Provider();
  const contract = new ethers.Contract(
    tokenAddress,
    ERC20.abi,
    web3Provider.getSigner()
  );
  console.log("tokenAddress", spenderAddress);
  const transaction = await contract.approve(
    spenderAddress,
    ethers.constants.MaxUint256
  );
  console.log(tokenAddress, "spenderAddress");
  await transaction.wait();
  return transaction;
};
export const isSpendApproved = async (
  tokenAddress: string,
  spenderAddress: string
) => {
  const web3Provider = await getWeb3Provider();
  const signer = web3Provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, ERC20.abi, signer);

  const allowance = await contract.allowance(
    signer.getAddress(),
    spenderAddress
  );
  return allowance;
};
