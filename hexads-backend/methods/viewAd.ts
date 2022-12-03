import InteractionModel from "../config/db/models/InteractionModel";

const viewAd = async ({
  userAddress,
  platformAddress,
  advertiserAddress,
  campaignID,
  isView,
}) => {
  InteractionModel.triggerInteraction(
    userAddress,
    platformAddress,
    advertiserAddress,
    campaignID,
    isView
  );
};

export default viewAd;
