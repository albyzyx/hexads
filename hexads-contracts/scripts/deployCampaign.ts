import { ethers } from "hardhat";

async function main() {
  const Campaign = await ethers.getContractFactory("HexadManager");
  const campaign = await Campaign.deploy(
    "0xd2ae40c34Fb6788ea7b0945b4c392f648d753417",
    "0x6cE1903B4D8A0247591154126271A75aC1E0a282"
  );
  console.log(campaign.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xFdd59E00fbAC168F8309aA6c569fc198bb1970DB
