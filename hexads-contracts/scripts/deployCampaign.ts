import { ethers } from "hardhat";

async function main() {
  const Campaign = await ethers.getContractFactory("HexadManager");
  const campaign = await Campaign.deploy(
    "0xd2ae40c34Fb6788ea7b0945b4c392f648d753417",
    "0xdF960D425e6f31b32B1ec7F4Da056EF4D50AA710"
  );
  console.log(campaign.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xc0D16A82b43fDB74DA2D2b4De4F2003E9709ea1A
