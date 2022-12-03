import OffChainEarningInterface from "./modelInterfaces/OffChainEarningInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";

const addOffChainEarnings = async (address: string, earningXAT: number) => {
  const offChainEarningModel = await OffChainEarningModel.findOne({
    address,
  });
  if (offChainEarningModel) {
    const newOffChainEarningModel = new OffChainEarningModel({
      address,
      earningXAT,
    });
    await newOffChainEarningModel.save();
  } else {
    offChainEarningModel.earningXAT += earningXAT;
    offChainEarningModel.save();
  }
};

const getOffChainEarnings = async (address: string) => {
  const offChainEarningModel = await OffChainEarningModel.findOne({ address });
  if (offChainEarningModel) {
    const newOffChainEarningModel = new OffChainEarningModel({ address });
    await newOffChainEarningModel.save();
    return 0;
  } else {
    return offChainEarningModel.earningXAT;
  }
};

const offChainEarningSchema = new mongoose.Schema(OffChainEarningInterface, {
  timestamps: true,
  statics: {
    getOffChainEarnings,
    addOffChainEarnings,
  },
});

const OffChainEarningModel = mongoose.model(
  "OffChainEarningModel",
  offChainEarningSchema,
  "OffChainEarningCollection"
);

export default OffChainEarningModel;
