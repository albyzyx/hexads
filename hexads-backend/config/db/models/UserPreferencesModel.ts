import UserPreferencesInterface from "./modelInterfaces/UserPreferencesInterface";
import mongoose from "mongoose";
import { ethers } from "ethers";

const getTargetsOf = (address: string) => {
  return new Promise<number[]>((resolve, reject) => {
    UserPreferencesModel.findOne({ address }).then((user) => {
      if (user) {
        resolve(user.targetsOf);
      }
      resolve([]);
    });
  });
};

const userPreferencesSchema = new mongoose.Schema(UserPreferencesInterface, {
  timestamps: true,
  statics: {
    getTargetsOf,
  },
});

const UserPreferencesModel = mongoose.model(
  "UserPreferencesModel",
  userPreferencesSchema,
  "UserPreferencesCollection"
);

export default UserPreferencesModel;
