import { ethers } from "ethers";

import CampaignContract from "../contract/CampaignContract.json";
import { Campaign as CampaignContractType } from "../contract/types/CampaignContract";

const getWallet = () => {
  return new ethers.Wallet(process.env.ADMIN_PK);
};

export const getCampaignContract = async (campaignContract: string) => {
  const wallet = getWallet();
  const contract = new ethers.Contract(
    campaignContract,
    CampaignContract.abi,
    wallet
  ) as CampaignContractType;
  return contract;
};

export const fetchCampaignData = async (campaignId: number) => {
  const CampaignContract = await getCampaignContract("campaignAddress");
  const metadataCID = await CampaignContract.metadataCID();
  return {
    campaignName: "TestCampaign",
    description: "TestCampaignDescription",
    redirectURL: "null.test.com",
    bannerURL: "null.test.com",
    targetAudience: [1, 5, 7],
    campaignBudgetXAT: 1000,
  };
};
