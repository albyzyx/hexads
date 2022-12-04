import InteractionModel from "../config/db/models/InteractionModel";

const getAdvertizerData = async ({ address }) => {
  const res = {
    totalAudience: 0,
    totalImpressions: 0,
    totalEngagement: 0,
    totalSpendings: 0,
  };
  InteractionModel.find({ advertizerAddress: address }).then((interactions) => {
    if (interactions.length != 0) {
    }
  });
  return {};
};

export default getAdvertizerData;
