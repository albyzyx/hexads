import { ethers } from "ethers";
import { getWeb3Provider } from "./walletConnect";
import CampaignManager from "../contracts/CampaignManager.json";
import { CampaignManager as CampaignManagerType } from "../types/CampaignManager";
import { CAMPAIGN_MANAGER_ADDRESS, XAT } from "./constants";
import { parseUnits } from "ethers/lib/utils";
import { approveSpend } from "./genericWeb3Helper";

export const getCampignManagerContract = async () => {
  const web3Provider = await getWeb3Provider();
  console.log({ web3Provider: web3Provider.network });
  const contract = new ethers.Contract(
    CAMPAIGN_MANAGER_ADDRESS,
    CampaignManager.abi,
    web3Provider.getSigner()
  ) as CampaignManagerType;
  return contract;
};

export const createAdCampignContract = async (
  name: string,
  ipfsCID: string,
  campignBudget: string
) => {
  const campignContract = await getCampignManagerContract();
  const tx = await campignContract.createCampaign(
    name,
    parseUnits(campignBudget, 18),
    ipfsCID
  );
  await tx.wait();
  console.log("Ret", tx.data);
  return tx.data;
};
