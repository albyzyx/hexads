import InteractionModel from "../config/db/models/InteractionModel";

const viewAd = async ({
  userAddress,
  platformAddress,
  campaignAddress,
  isView,
}) => {
  InteractionModel.triggerInteraction(
    userAddress,
    platformAddress,
    campaignAddress,
    isView
  );
};

export default viewAd;
