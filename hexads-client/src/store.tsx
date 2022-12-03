import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import walletReducer from "./redux/WalletSlice";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
