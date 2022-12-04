import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  walletConnect,
  walletDisconnect,
  walletConnectIfCache,
} from "../helpers";

interface WalletState {
  address: string;
  network: string;
  token: string;
  status: string;
}

let INIT_STATE: WalletState = {
  address: "",
  network: "",
  token: "",
  status: "idle",
};

export const connectWallet = createAsyncThunk("AUTH/CONNECT_WALLET", () => {
  return new Promise((resolve, reject) => {
    walletConnect().then(resolve).catch(reject);
  });
});

export const disconnectWallet = createAsyncThunk(
  "AUTH/DISCONNECT_WALLET",
  () => {
    return new Promise<void>((resolve, reject) => {
      walletDisconnect();
      resolve();
    });
  }
);

export const connectWalletCache = createAsyncThunk(
  "AUTH/CONNECT_WALLET_CACHE",
  () => {
    return new Promise((resolve, reject) => {
      walletConnectIfCache().then(resolve).catch(reject);
    });
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState: INIT_STATE,
  reducers: {
    clearWalletState: (state) => {
      state.address = "";
      state.network = "";
      state.token = "";
      state.status = "idle";
    },
    setWalletState: (state, { payload }) => {
      state.address = payload.address;
      state.network = payload.network;
      state.token = payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectWallet.fulfilled, (state, { payload }: any) => {
        console.log({ payload });
        state.address = payload.address;
      })
      .addCase(connectWalletCache.fulfilled, (state, { payload }: any) => {
        state.address = payload.address;
      })
      .addCase(disconnectWallet.fulfilled, (state, { payload }: any) => {
        state.address = "";
        localStorage.removeItem("user_type");
      });
  },
});

export const { setWalletState, clearWalletState } = walletSlice.actions;

export const selectWalletState = ({ wallet }: { wallet: WalletState }) =>
  wallet;

export default walletSlice.reducer;
