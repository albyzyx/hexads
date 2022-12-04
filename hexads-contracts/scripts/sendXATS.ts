import { ethers } from "hardhat";

async function main() {
  const XAT = await ethers.getContractAt(
    "XAT",
    "0xdF960D425e6f31b32B1ec7F4Da056EF4D50AA710"
  );
  const xat = await XAT.approve(
    "0xc0D16A82b43fDB74DA2D2b4De4F2003E9709ea1A",
    ethers.constants.MaxUint256
  );
  console.log(xat);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x6cE1903B4D8A0247591154126271A75aC1E0a282
