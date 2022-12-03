import CampaignModel from "../config/db/models/CampaignModel";
import UserPreferences from "../config/db/models/UserPreferencesModel";
import InteractionModel from "../config/db/models/InteractionModel";

const viewAd = async ({ userAddress, campaignAddress }) => {
  const targetsOf = await UserPreferences.getTargetsOf(userAddress);
  if (targetsOf.length == 0) {
  } else {
    const ad = await CampaignModel.getTargetAd(targetsOf);
    if (ad) return ad;
    else return null;
  }
};

export default viewAd;
