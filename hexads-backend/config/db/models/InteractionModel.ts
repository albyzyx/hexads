import InteractionInterface from "./modelInterfaces/InteractionInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";
import CampaignModel from "./CampaignModel";
import OffChainEarningModel from "./OffChainEarningModel";

const interaction = {
  VIEW: 0,
  CLICK: 1,
};

const interactionCost = {
  VIEW: 1,
  CLICK: 5,
};

const triggerInteraction = (
  userAddress: string,
  platformAddress: string,
  campaignID: number,
  isView: boolean
) => {
  const interactionCostXAT = isView
    ? interactionCost.VIEW
    : interactionCost.CLICK;
  const interactionModel = new InteractionModel({
    campaignID,
    platformAddress,
    userAddress,
    interactionType: isView ? interaction.VIEW : interaction.CLICK,
    interactionCostXAT,
  });
  interactionModel.save();
  CampaignModel.addSpentXAT(campaignID, interactionCostXAT);
  OffChainEarningModel.addOffChainEarnings(userAddress, interactionCostXAT);
  OffChainEarningModel.addOffChainEarnings(platformAddress, interactionCostXAT);
};

const interactionSchema = new mongoose.Schema(InteractionInterface, {
  timestamps: true,
  statics: {
    triggerInteraction,
  },
});

const InteractionModel = mongoose.model(
  "InteractionModel",
  interactionSchema,
  "InteractionCollection"
);

export default InteractionModel;
