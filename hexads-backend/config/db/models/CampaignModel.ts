import CampaignInterface from "./modelInterfaces/CampaignInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";
import { resolve } from "path";
import { rejects } from "assert";

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

const CampaignSchema = new mongoose.Schema(CampaignInterface, {
  timestamps: true,
  statics: {
    getTargetAd,
  },
});

const CampaignModel = mongoose.model(
  "CampaignModel",
  CampaignSchema,
  "CampaignCollection"
);

export default CampaignModel;
