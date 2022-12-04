import React from "react";
import { useWallet } from "../../hooks";
import Button from "../common/Button";

const WalletConnect = () => {
  const { address, connect, disconnect, isConnected } = useWallet();

  return (
    <Button onClick={isConnected ? disconnect : connect} type="button">
      <div className="truncate w-32 text-left text-lightBlack capitalize">
        {isConnected ? address : "Connect"}
      </div>
    </Button>
  );
};

export const truncateAddress = (address: String) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{5})[a-zA-Z0-9]+([a-zA-Z0-9]{5})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export default WalletConnect;
