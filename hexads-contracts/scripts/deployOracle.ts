import { ethers } from "hardhat";

async function main() {
  const UnrealisedRewardsOracle = await ethers.getContractFactory(
    "UnrealisedRewardsOracle"
  );
  const unrealisedRewardsOracle = await UnrealisedRewardsOracle.deploy();
  console.log(unrealisedRewardsOracle.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
