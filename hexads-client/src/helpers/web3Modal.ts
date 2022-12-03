import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { MUMBAI_RPC } from "./constants";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: [MUMBAI_RPC],
    },
  },
};

export const web3ModalSingleton: any = {
  web3Modal: new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: "dark",
  }),
  provider: null,
  web3Provider: null,
};

export const clearWeb3Modal = () => {
  web3ModalSingleton.web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: "dark",
  });
  web3ModalSingleton.provider = null;
  web3ModalSingleton.web3Provider = null;
};
