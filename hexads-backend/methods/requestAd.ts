import CampaignModel from "../config/db/models/CampaignModel";
import UserPreferences from "../config/db/models/UserPreferencesModel";

const requestAd = async ({ userAddress, PlatformAddress }) => {
  const targetsOf = await UserPreferences.getTargetsOf(userAddress);
  if (targetsOf.length == 0) {
  } else {
    const ad = await CampaignModel.getTargetAd(targetsOf);
    if (ad) return ad;
    else return null;
  }
};

export default requestAd;
