import { parseUnits } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
  const XAT = await ethers.getContractAt(
    "XAT",
    "0xdF960D425e6f31b32B1ec7F4Da056EF4D50AA710"
  );
  const xat = await XAT.transfer(
    "0x9D543e6B9d73963e10aDEeDacdA587d60098cF33",
    parseUnits("10000", 18)
  );
  await xat.wait();
  console.log(xat.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6cE1903B4D8A0247591154126271A75aC1E0a282
