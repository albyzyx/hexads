import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./index";
import {
  selectWalletState,
  clearWalletState,
  connectWalletCache,
  connectWallet,
  disconnectWallet,
} from "../redux/WalletSlice";

const useWallet = () => {
  const dispatch = useAppDispatch();

  const { address } = useAppSelector(selectWalletState);

  useEffect(() => {
    dispatch(connectWalletCache());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const connect = () => {
    dispatch(connectWallet());
  };

  const disconnect = () => {
    dispatch(disconnectWallet());
  };

  const clear = () => {
    dispatch(clearWalletState());
  };

  const isConnected = address !== "";

  return { address, connect, disconnect, clear, isConnected };
};

export default useWallet;
