import { ethers } from "hardhat";

async function main() {
  const Campaign = await ethers.getContractFactory("Campaign");
  const campaign = await Campaign.deploy("test", "");
  console.log(campaign.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
