import React from "react";
import { useWallet } from "../../hooks";

const WalletConnect = () => {
  const { address, connect, disconnect, isConnected } = useWallet();

  return (
    <div onClick={isConnected ? disconnect : connect}>
      {isConnected ? address : "WalletConnect"}
    </div>
  );
};

export default WalletConnect;
