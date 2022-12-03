import { ethers } from "hardhat";

async function main() {
  const UnrealisedRewardsOracle = await ethers.getContractAt(
    "UnrealisedRewardsOracle",
    "0x811a893Df1e29ecd33594167c05A7C7586Ef9360"
  );
  const tx = await UnrealisedRewardsOracle.requestVolumeData();
  await tx.wait();
  console.log(tx.data);
  const reqId = tx.data;
  const volume = await UnrealisedRewardsOracle.volume();
  console.log({ volume });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
