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

// 0xdF960D425e6f31b32B1ec7F4Da056EF4D50AA710
