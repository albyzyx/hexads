import TargetKeywordInterface from "./modelInterfaces/TargetKeywordInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";

const TargetKeywordSchema = new mongoose.Schema(TargetKeywordInterface, {
  timestamps: true,
});

const TargetKeywordModel = mongoose.model(
  "TargetKeywordModel",
  TargetKeywordSchema,
  "TargetKeywordCollection"
);

export default TargetKeywordModel;
