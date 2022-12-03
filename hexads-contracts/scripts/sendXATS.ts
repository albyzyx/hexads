import { ethers } from "hardhat";

async function main() {
  const XAT = await ethers.getContractAt(
    "XAT",
    "0xdF960D425e6f31b32B1ec7F4Da056EF4D50AA710"
  );
  const xat = await XAT.balanceOf("0xd2ae40c34Fb6788ea7b0945b4c392f648d753417");
  console.log(xat);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6cE1903B4D8A0247591154126271A75aC1E0a282
