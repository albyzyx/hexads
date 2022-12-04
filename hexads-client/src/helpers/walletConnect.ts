import { ethers, providers } from "ethers";
import { MUMBAI_RPC } from "./constants";
import { throwError } from "./storeHelper";
import { clearWeb3Modal, web3ModalSingleton } from "./web3Modal";

export const walletConnect = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    let provider =
      web3ModalSingleton.web3Modal &&
      (await web3ModalSingleton.web3Modal.connect());
    const web3Provider = new providers.Web3Provider(provider);
    web3ModalSingleton.provider = provider;
    web3ModalSingleton.web3Provider = web3Provider;
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    delete network._defaultProvider;
    resolve({ address, network });
  });
};

export const getConnectedProvider = ():
  | providers.ExternalProvider
  | undefined => {
  if (web3ModalSingleton.provider !== null) {
    return web3ModalSingleton.provider;
  } else {
    throwError("You are not connected");
    // throw new Error("!CONNECTED");
  }
};

export const getWeb3Provider = () => {
  return new Promise<providers.Web3Provider>((resolve, reject) => {
    let provider = getConnectedProvider();
    if (web3ModalSingleton.web3Provider !== null) {
      resolve(web3ModalSingleton.web3Provider);
    } else if (provider) {
      let web3Provider = new providers.Web3Provider(provider);
      web3ModalSingleton.web3Provider = web3Provider;
      resolve(web3Provider);
    } else {
      console.log("REJ");
      reject();
    }
  });
};

export const walletConnectIfCache = async () => {
  if (localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") != null) {
    return walletConnect();
  }
  throw new Error("No Cache");
};

export const walletDisconnect = () => {
  if (web3ModalSingleton.web3Modal) {
    web3ModalSingleton.web3Modal.clearCachedProvider();
  }

  clearWeb3Modal();
  return;
};

export const getProviderWithoutSigner = () => {
  const provider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC);
  return provider;
};

export const getConnectedAddress = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const web3Provider = await getWeb3Provider();
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    resolve(address);
  });
};

export const getConnectedBalance = (): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const web3Provider = await getWeb3Provider();
    const signer = web3Provider.getSigner();
    const balance = await signer.getBalance();
    resolve(balance);
  });
};
