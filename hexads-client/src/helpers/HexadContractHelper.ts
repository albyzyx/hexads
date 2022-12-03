import { ethers } from "ethers";
import { getWeb3Provider } from "./walletConnect";
import CampaignManager from "../contracts/CampaignManager.json";
import { CampaignManager as CampaignManagerType } from "../types/CampaignManager";
import { CAMPAIGN_MANAGER_ADDRESS } from "./constants";
import { parseUnits } from "ethers/lib/utils";

export const getCampignManagerContract = async () => {
  const web3Provider = await getWeb3Provider();
  const contract = new ethers.Contract(
    CAMPAIGN_MANAGER_ADDRESS,
    CampaignManager.abi,
    web3Provider.getSigner()
  ) as CampaignManagerType;
  return contract;
};

export const createAdCampign = async (
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
  console.log(tx);
  return tx.data;
};
