import CampaignInterface from "./modelInterfaces/CampaignInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";

const getTargetAd = (targetID: number[]) => {
  return new Promise<any>((resolve, reject) => {
    CampaignModel.find({
      targetAudience: { $in: targetID },
      isActive: true,
    }).then((campaignModels) => {
      if (campaignModels) {
        resolve(
          campaignModels[Math.floor(Math.random() * campaignModels.length)]
        );
      } else {
        CampaignModel.find({
          isActive: true,
        }).then((campaignModels) => {
          if (campaignModels) {
            resolve(
              campaignModels[Math.floor(Math.random() * campaignModels.length)]
            );
          } else {
            resolve(false);
          }
        });
      }
    });
  });
};

const addSpentXAT = (campaignID: number, interactionCostXAT: number) => {
  CampaignModel.findOne({ campaignID }).then((campaignModel) => {
    campaignModel.campaignSpentXAT += interactionCostXAT;
    if (campaignModel.campaignSpentXAT >= campaignModel.campaignBudgetXAT) {
      campaignModel.isActive = false;
    }
    campaignModel.save();
  });
};

const CampaignSchema = new mongoose.Schema(CampaignInterface, {
  timestamps: true,
  statics: {
    getTargetAd,
    addSpentXAT,
  },
});

const CampaignModel = mongoose.model(
  "CampaignModel",
  CampaignSchema,
  "CampaignCollection"
);

export default CampaignModel;
