import React from "react";
import Chain from "./Chain";
import WalletConnect from "./WalletConnect";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-between py-5 px-20 w-full">
      <h1>Hex Ads</h1>
      <div className="flex items-center gap-4">
        <Chain />
        <WalletConnect />
      </div>
    </header>
  );
};

export default HeaderComponent;
