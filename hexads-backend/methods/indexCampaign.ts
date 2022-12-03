import CampaignModel from "../config/db/models/CampaignModel";
import { fetchCampaignData } from "../services/contractInteraction";

const indexCampaign = async ({ address }) => {
  const campaignData = await fetchCampaignData(address);
  const campaignModel = new CampaignModel(campaignData);
  const savedCampaignData = await campaignModel.save();
  return savedCampaignData;
};

export default indexCampaign;
