import { ethers } from "hardhat";

async function main() {
  const XAT = await ethers.getContractFactory("XAT");
  const xat = await XAT.deploy();
  console.log(xat.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6cE1903B4D8A0247591154126271A75aC1E0a282
