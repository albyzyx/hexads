import React from "react";
import { useWallet } from "../../hooks";
import WalletConnect from "./WalletConnect";

const HeaderComponent = () => {
  const wallet = useWallet();
  return (
    <header className="flex items-center justify-between py-5 pl-16 pr-10 w-full bg-white shadow-sm broder-b border-b-gray-400">
      {/* <h1 className=" font-bold text-3xl">HexAds</h1> */}
      <img src={"/logo.png"} alt="" className="w-36 h-8" />
      <div className="flex items-center gap-4">
        <WalletConnect />
        {wallet.address && (
          <>
            <div className="h-12 w-12 rounded-full bg-black"></div>
            <div>
              <span className="text-black font-medium text-xl">Hi, </span>
              <span className="text-xl font-semibold text-accent">
                {"Yedhu Krish"}
              </span>
            </div>
          </>
        )}
        <WalletConnect />
      </div>
    </header>
  );
};

export default HeaderComponent;
