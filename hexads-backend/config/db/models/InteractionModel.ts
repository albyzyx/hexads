import InteractionInterface from "./modelInterfaces/InteractionInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";

const interactionSchema = new mongoose.Schema(InteractionInterface, {
  timestamps: true,
  statics: {},
});

const InteractionModel = mongoose.model(
  "InteractionModel",
  interactionSchema,
  "InteractionCollection"
);

export default InteractionModel;
